import "./index.css";
import { useState } from "react";

function App() {
  const [tasks, setTasks] = useState([]);
  const [text, setText] = useState("");

  const taskItems = tasks.map((task, idx) => {
    const onClickItem = () => {
      setTasks([
        ...tasks.slice(0, idx),
        { ...task, completed: !task.completed },
        ...tasks.slice(idx + 1),
      ]);
    };

    const onClickTrash = () => {
      setTasks(tasks.filter((taskToTrash) => taskToTrash !== task));
    };

    return (
      <li key={idx}>
        <span
          className={task.completed ? "completed" : null}
          onClick={onClickItem}
        >
          {task.label}
        </span>
        <span className="trashcan" onClick={onClickTrash}>
          🗑
        </span>
      </li>
    );
  });

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onClickAdd = () => {
    setText("");
    setTasks([...tasks, { label: text }]);
  };

  const onClickClear = () => {
    setTasks([]);
  };

  const completedCounter = tasks.filter((task) => task.completed).length;

  return (
    <div id="mainDiv">
      <h1>Hugg tag i detta</h1>
      <h2 id="msgHTML">
        {completedCounter} avklarade av {tasks.length}
      </h2>
      <div>
        <input
          type="text"
          id="inputHTML"
          placeholder="Skriv"
          value={text}
          onChange={onTextChange}
        />
        <button onClick={onClickAdd} title="Lägg till">
          <i className="fas fa-plus-square"></i>
        </button>
        <button onClick={onClickClear} id="btnClear">
          <i className="fas fa-minus-square"></i>
        </button>
        <div>
          <ul className="toDoList">{taskItems}</ul>
        </div>
      </div>
    </div>
  );
}

export default App;
