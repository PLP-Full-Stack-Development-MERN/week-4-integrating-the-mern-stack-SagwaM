import { Container, Typography, Button } from "@mui/material";
import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // 🚀 Redirect feature

function Home() {
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate(); // 👈 Initialize navigation


  return (
    <Container>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Task Manager
      </Typography>

      {/* Task Form */}
      <TaskForm refreshTasks={() => setRefresh(!refresh)} />
        
      {/* View Tasks Button */}
      <Button 
        variant="contained" 
        color="secondary" 
        sx={{ mt: 2 }} 
        onClick={() => navigate("/tasks")} // 👈 Redirects to Task List
      >
        View Task List
      </Button>

      
    </Container>
  );
}

export default Home;
