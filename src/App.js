import "./index.css";
import { useState } from "react";
import TaskList from "./TaskList";
import TaskInput from "./TaskInput";

export default function App() {
  const [tasks, setTasks] = useState([]);

  const onAdd = (label) => {
    setTasks([
      ...tasks,
      {
        label,
      },
    ]);
  };

  const onClear = () => {
    setTasks([]);
  };

  return (
    <div className="App">
      <div id="mainDiv">
        <h1>To Do for You</h1>
        {/*<Counter />*/}
        <TaskInput onAdd={onAdd} onClear={onClear} />
        <TaskList tasks={tasks} />
      </div>
    </div>
  );
}
