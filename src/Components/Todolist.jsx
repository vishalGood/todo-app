import React from "react";

const Todolist = ({ item, remove,id }) => {
  return (
    <>
      <div className="todo_style">
        <i className="fa fa-times" aria-hidden="true" onClick={()=>remove(id)} />
        <li>{item}</li>
      </div>
    </>
  );
};

export default Todolist;
