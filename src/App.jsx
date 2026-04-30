import React, { useState } from "react";
import "./App.css";
function ToDoList() {

  let [tasks, setTasks] = useState([]);
  let [text, setText] = useState("");

  function change(e){
    setText(e.target.value);
  }

  function add(){
    if(text !== ""){
      let arr = [...tasks];
      arr.push(text);
      setTasks(arr);
      setText("");
    }
  }

  return (
    <div>

      <h1>MY To Do LIST</h1>

      <input value={text} onChange={change} />
      <button onClick={add}>Add</button>

      <ul>
        {tasks.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>

    </div>
  );
}

export default ToDoList;