import React from "react";

function TodoItems(props) {
  return (
    <li className="text-black text-xl p-2 flex justify-between ">
      <span>
        {props.completed ? <></> : <input type="checkbox" />}
        <span className="m-2">{props.text}</span>
      </span>
      <p>...</p>
    </li>
  );
}

export default TodoItems;
