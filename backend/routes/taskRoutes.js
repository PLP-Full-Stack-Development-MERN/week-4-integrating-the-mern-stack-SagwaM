const express = require("express");
const Task = require("../models/Task");

const router = express.Router();

// Create Task
router.post("/", async (req, res) => {
  try {
    const { title, description, status, dueDate, userEmail } = req.body;

    if (!title) {
      return res.status(400).json({ message: "Task title is required" });
    }

    if (!userEmail) {
        return res.status(400).json({ message: "User email is required" });
    }

    const newTask = new Task({
        title,
        description, 
        status: status || "pending", 
        dueDate, 
        userEmail,
    });
    await newTask.save();
    res.status(201).json({ 
        message: "Task created successfully!", 
        task: newTask 
      });
  } catch (err) {
    res.status(400).json({ error: "Error creating task", details: err.message });
  }
});

// Get All Tasks
router.get("/", async (req, res) => {
    try {
        const { status, title } = req.query; // Get status from query params
        let filter = {};

        if (status) {
            filter.status = status; // Apply status filter if provided
        }
        if (title) {
            filter.title = { $regex: title, $options: "i" }; // Case-insensitive search
        }
      const tasks = await Task.find(filter);
      res.json(tasks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

// Update Task
router.put("/:id", async (req, res) => {
  try {
    const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedTask);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Delete Task
router.delete("/:id", async (req, res) => {
    try {
      await Task.findByIdAndDelete(req.params.id);
      res.json({ message: "✅ Task deleted successfully" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
});

module.exports = router;
