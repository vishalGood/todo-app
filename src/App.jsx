import React, { useState } from "react";
import "./App.css";
import Todolist from "./Components/Todolist";
function Todo_list() {
  const [todo, setTodo] = useState("");
  const [item, setItem] = useState([]);
  function change(e) {
    setTodo(e.target.value);
  }
  function addItem() {
    if (!todo) {
      return;
    }

    setItem((oldItems) => {
      return [...oldItems, todo];
    });
    setTodo("");
  }
  function remove(id) {
    setItem((oldItems) => {
      return oldItems.filter((element, index) => {
        return index !== id;
      });
    });
  }

  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>ToDo List</h1>
          <br />
          <input type="text" placeholder="Add Items" onChange={change} />
          <button className="button" onClick={addItem}>
            +
          </button>
          <ol>
            {item.map((item, index) => {
              return (
                <Todolist key={index} id={index} item={item} remove={remove} />
              );
            })}
          </ol>
          <button className="clear_button" onClick={() => setItem([])}>
            Clear All
          </button>
        </div>
      </div>
    </>
  );
}

export default Todo_list;
