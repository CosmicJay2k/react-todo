import "./index.css";

function App() {
  return (
    <div id="mainDiv">
      <h1>To Do for You</h1>
      <h2 id="msgHTML">Lägg till någonting!</h2>
      <div>
        <input type="text" id="inputHTML" placeholder="Skriv" />
        <button type="submit" id="btnOK">
          OK
        </button>
        <button type="submit" id="btnAdd" title="Lägg till">
          <i className="fas fa-plus-square"></i>
        </button>
        <button type="submit" className="tooltip" id="btnClear">
          <i className="fas fa-minus-square"></i>
        </button>
        <div>
          <ul className="toDoList"></ul>
        </div>
      </div>
    </div>
  );
}

export default App;
