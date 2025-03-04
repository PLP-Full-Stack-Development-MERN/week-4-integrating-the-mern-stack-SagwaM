import { Card, CardContent, Typography, Button } from "@mui/material";

function TaskCard({ task }) {
  return (
    <Card sx={{ maxWidth: 400, margin: 2 }}>
      <CardContent>
        <Typography variant="h6">{task.title}</Typography>
        <Typography color="text.secondary">{task.description}</Typography>
        <Typography color="text.secondary">Status: {task.status}</Typography>
        <Typography color="text.secondary">Due: {new Date(task.dueDate).toLocaleDateString()}</Typography>
        <Button variant="contained" color="primary" sx={{ mt: 1 }}>
          Edit
        </Button>
      </CardContent>
    </Card>
  );
}

export default TaskCard;
