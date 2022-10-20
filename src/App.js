import "./index.css";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";
import Counter from "./Counter";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const onAdd = (label) => {
    const time = new Date().getTime().toString();
    console.log(time);
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

  const onTrash = (time) => {
    console.log("trash clicked");
    console.log(time);
    setTasks(tasks.filter((taskToTrash) => taskToTrash.time !== time));
  };

  return (
    <div className="App">
      <div id="mainDiv">
        <h1>To Do for You</h1>
        <Counter tasks={tasks} />
        <TaskInput onAdd={onAdd} onClear={onClear} />
        <TaskList tasks={tasks} onTrash={onTrash} />
      </div>
    </div>
  );
}
