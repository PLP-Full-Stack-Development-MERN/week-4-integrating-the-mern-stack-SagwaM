const Task = require("../models/Task");
require("dotenv").config();
const nodemailer = require("nodemailer");
const cron = require("node-cron");

// ✅ Email Transporter Setup
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const sendReminder = async (task) => {
    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: task.userEmail, // Replace with user's email
        subject: `Reminder: Task "${task.title}" is due soon!`,
        text: `Hello, \n\nYour task "${task.title}" is due on ${task.dueDate}. Please complete it soon. \n\nBest Regards,\nTask Manager App`,
    };

    try {
        await transporter.sendMail(mailOptions);
        console.log(`✅ Reminder sent to ${task.userEmail} for task: ${task.title}`);
    } catch (error) {
        console.error("❌ Error sending email:", error);
    }
};

const checkTaskReminders = async () => {
    try {
        const now = new Date();
        const upcomingTasks = await Task.find({
            dueDate: { $lte: new Date(now.getTime() + 24 * 60 * 60 * 1000) }, // Due in next 24 hours
            status: { $ne: "completed" }, // Ignore completed tasks
        });

        for (const task of upcomingTasks) {
            if (task.userEmail) {
                console.log(`⏳ Sending reminder for task: "${task.title}"`);
                await sendReminder(task); // Call sendReminder function
            }
        }
    } catch (error) {
        console.error("Error checking task reminders:", error);
    }
};

// ✅ Schedule to Run Every Hour
cron.schedule("0 * * * *", () => {
    console.log("⏳ Running scheduled task reminder...");
    checkTaskReminders();
});

module.exports = { sendReminder };
