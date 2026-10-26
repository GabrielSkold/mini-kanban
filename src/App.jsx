import { useState } from "react";
import Board from "./components/Board/Board";
import Column from "./components/Column/Column";
import TaskCard from "./components/TaskCard/TaskCard";
import TaskForm from "./components/TaskForm/TaskForm";

const taskList = [
  {
    id: 1,
    title: "Learn react props",
    taskStatus: "todo",
  },
  {
    id: 2,
    title: "Create a Kanban board",
    taskStatus: "in-progress",
  },
  {
    id: 3,
    title: "Understanding React",
    taskStatus: "done",
  },
];

function App() {
  const [tasks, setTasks] = useState(taskList);
  return (
    <>
      <h1>Mini Kanban Board</h1>

      <Board tasks={tasks} />
      <Column />
      <TaskCard />
      <TaskForm />
    </>
  );
}

export default App;
