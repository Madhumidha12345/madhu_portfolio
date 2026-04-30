import { useState } from "react";

function App() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  function addTask() {
    if (task.trim() === "") return;

    const newItem = {
      text: task,
      date: new Date().toLocaleDateString(),
    };

    setList([...list, newItem]);
    setTask("");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>My Todo List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your task..."
          value={task}
          onChange={(e) => setTask(e.target.value)}
          style={{
            padding: "8px",
            border: "2px solid blue",
            borderRadius: "5px",
            marginRight: "10px"
          }}
        />

        <button
          onClick={addTask}
          style={{
            padding: "8px 12px",
            backgroundColor: "brown",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Add
        </button>
      </div>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {list.map((item, index) => (
          <li key={index}>
            {item.text} - {item.date}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;