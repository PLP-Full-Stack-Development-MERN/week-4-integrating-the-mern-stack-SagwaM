import { useState } from "react";
import { TextField, Button, Container, Typography, MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import axios from "axios";
import dayjs from "dayjs";

function TaskForm({ refreshTasks }) {
  const [task, setTask] = useState({
    title: "",
    description: "",
    dueDate: null,
    status: "pending",
    userEmail: "sagwakmaria@gmail.com", // Replace with dynamic user email if needed
  });

  const handleChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    if (date) {
      setTask({ ...task, dueDate: dayjs(date).toISOString() });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5001/api/tasks/", task);
      alert("Task created successfully!");
      setTask({ title: "", description: "", dueDate: null, status: "pending", userEmail: task.userEmail });
      refreshTasks(); // Refresh task list after adding
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Container sx={{ 
        my: 3,
        p: 3,
        backgroundColor: "#7393B3", // Blue gray background
        borderRadius: 2,
        boxShadow: 3,  
        maxWidth: 500,
        display: "flex", // Center container itself
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "50vh", // Ensures centering within viewport
        mx: "auto", // Centers horizontally
        }}>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Add New Task
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Title"
            name="title"
            value={task.title}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
            sx={{ fontWeight: "bold" }}
          />
          <TextField
            label="Description"
            name="description"
            value={task.description}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />
          <DatePicker
            label="Due Date"
            value={task.dueDate ? dayjs(task.dueDate) : null}
            onChange={handleDateChange}
          />
          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select name="status" value={task.status} onChange={handleChange}>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <TextField
            label="User Email"
            name="userEmail"
            value={task.userEmail}
            onChange={handleChange}
            fullWidth
            margin="normal"
            required
          />
          <Button type="submit" variant="contained" color="primary" sx={{ mt: 2, fontWeight: "bold" }}>
            Add Task
          </Button>
        </form>
      </Container>
    </LocalizationProvider>
  );
}

export default TaskForm;
