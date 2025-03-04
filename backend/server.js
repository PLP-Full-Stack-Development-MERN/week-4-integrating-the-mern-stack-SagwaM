const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
require("./services/reminderService");


const app = express();
app.use(express.json());
app.use(cors());

const taskRoutes = require("./routes/taskRoutes");

// MongoDB connection
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MongoDB Connected"))
  .catch((err) => console.log("❌ Error connecting to MongoDB:", err));

// Routes
app.get("/", (req, res) => res.send("Task Manager API is running"));

app.use("/api/tasks", taskRoutes);

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
