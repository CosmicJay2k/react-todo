import { useState } from "react";

export default function TaskInput(props) {
  const [text, setText] = useState("");

  const onClickAdd = () => {
    setText("");
    props.onAdd(text);
  };

  const onTextChange = (e) => {
    setText(e.target.value);
  };

  const onClickClear = () => {
    props.onClear();
  };

  return (
    <>
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
    </>
  );
}
