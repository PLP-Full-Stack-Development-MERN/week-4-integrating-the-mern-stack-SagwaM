import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import TaskList from "./components/TaskList";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tasks" element={<TaskList />} /> {/* ✅ Task List Route */}
      </Routes>
    </Router>
  );
}

export default App;
