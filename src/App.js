import "./index.css";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import Counter from "./Counter";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const onAdd = (label) => {
    const time = new Date().getTime().toString();
    setTasks([
      ...tasks,
      {
        label,
        completed: false,
        time,
      },
    ]);
  };

  const onClear = () => {
    setTasks([]);
  };

  const onItem = () => {
    tasks.forEach((task, idx) => {
      setTasks([
        ...tasks.slice(0, idx),
        { ...task, completed: !task.completed },
        ...tasks.slice(idx + 1),
      ]);
    });
  };
  const onTrash = (time) => {
    setTasks(tasks.filter((taskToTrash) => taskToTrash.time !== time));
  };

  return (
    <div className="App">
      <div id="mainDiv">
        <h1>To Do for You</h1>
        <Counter tasks={tasks} />
        <TaskInput onAdd={onAdd} onClear={onClear} />
        <TaskList tasks={tasks} onTrash={onTrash} onItem={onItem} />
      </div>
    </div>
  );
}
