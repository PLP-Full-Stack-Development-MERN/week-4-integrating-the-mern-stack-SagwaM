import { useEffect, useState } from "react";
import axios from "axios";
import { Typography, Box, List, ListItem, ListItemText, IconButton, Modal, Button, TextField, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { Edit, Delete } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";


function TaskList({refresh}) {
  const [tasks, setTasks] = useState([]);
  const [editTask, setEditTask] = useState(null); // Track task to edit
  const [open, setOpen] = useState(false); // Modal state
  const navigate = useNavigate(); // 👈 Initialize navigation

  useEffect(() => {
    axios.get("http://localhost:5001/api/tasks/")
      .then(response => {
        const validTasks = response.data.map(task => ({
          ...task,
          dueDate: task.dueDate ? new Date(task.dueDate).toISOString() : null
        }));
        setTasks(validTasks);
      })
      .catch(error => console.error("Error fetching tasks:", error));

  }, [refresh]);

  // Handle delete task
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5001/api/tasks/${id}`);
      setTasks(tasks.filter(task => task._id !== id)); // Remove from UI
      alert("Task deleted successfully!");
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  // Handle edit modal open
  const handleEdit = (task) => {
    setEditTask(task);
    setOpen(true);
  };

  // Handle edit submit
  const handleEditSubmit = async () => {
    try {
      await axios.put(`http://localhost:5001/api/tasks/${editTask._id}`, editTask);
      setTasks(tasks.map(task => (task._id === editTask._id ? editTask : task))); // Update UI
      setOpen(false);
      alert("Task updated successfully!");
    } catch (error) {
      console.error("Error updating task:", error);
    }
  };

  return (
    <Box sx={{ backgroundColor: "#7393B3",
      p: 4,
      borderRadius: 2,
      textAlign: "center",
      maxWidth: 600,
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      justifyContent: "center",
      margin: "auto",
      gap: 3, // Adds space between items
      mt: 5
      }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ textAlign: "center", marginBottom: 3, marginTop: 2 }}>
        Task List
      </Typography>
      <List sx={{ width: "100%", display: "flex", flexDirection: "column", gap: 2 }}>
        {tasks.map((task) => (
          <ListItem key={task._id} sx={{ 
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#fff", 
            padding: 2, 
            borderRadius: 2 ,
            boxShadow: 2,
            width: "100%",
            minHeight: "80px"
            }}>
            <ListItemText 
              primary={task.title} 
              secondary={`Due: ${task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No Due Date"}`}
              sx={{ fontSize: "1.1rem" }} // Increase text size 
            />
            <ListItemText
              secondary={task.description}
              sx={{ fontSize: "5rem" }} // Increase text size
            />
            <IconButton color="primary" onClick={() => handleEdit(task)}>
              <Edit />
            </IconButton>
            <IconButton color="error" onClick={() => handleDelete(task._id)}>
              <Delete />
            </IconButton>
          </ListItem>
        ))}
      </List>

      {/* Edit Modal */}
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 400, bgcolor: "white", p: 3, borderRadius: 2, mx: "auto", mt: 5 }}>
          <Typography variant="h6" fontWeight="bold">Edit Task</Typography>
          <TextField fullWidth margin="normal" label="Title" value={editTask?.title} onChange={(e) => setEditTask({ ...editTask, title: e.target.value })} />
          <TextField fullWidth margin="normal" label="Description" value={editTask?.description} onChange={(e) => setEditTask({ ...editTask, description: e.target.value })} />
          <TextField 
            fullWidth 
            margin="normal" 
            label="Due Date" 
            type="date" 
            value={editTask?.dueDate ? new Date(editTask.dueDate).toISOString().slice(0, 10) : ""} 
            onChange={(e) => setEditTask({ ...editTask, dueDate: e.target.value })} 
          />

          <FormControl fullWidth margin="normal">
            <InputLabel>Status</InputLabel>
            <Select value={editTask?.status || "pending"} onChange={(e) => setEditTask({ ...editTask, status: e.target.value })}>
              <MenuItem value="pending">Pending</MenuItem>
              <MenuItem value="in progress">In Progress</MenuItem>
              <MenuItem value="completed">Completed</MenuItem>
            </Select>
          </FormControl>
          <Button variant="contained" color="info" onClick={handleEditSubmit} sx={{ mt: 2 }}>Save Changes</Button>
        </Box>
      </Modal>
      {/* View Tasks Button */}
      <Button 
        variant="contained" 
        color="secondary" 
        sx={{ mt: 3, // More space above the button
          padding: "12px 20px", // Make button larger
          fontSize: "1rem",
          alignSelf: "center"  // Align button to center
        }} 
        onClick={() => navigate("/")} // 👈 Redirects to Task Form
      >
        Back To Task Form
      </Button>
    </Box>
  );
}

export default TaskList;
