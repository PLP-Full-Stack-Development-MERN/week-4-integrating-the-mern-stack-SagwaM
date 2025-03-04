const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, default: "pending", enum: ["pending", "in progress", "completed"] },
  dueDate: Date,
  userEmail: { type: String, required: true }, // Store user's email
});

module.exports = mongoose.model("Task", taskSchema);
