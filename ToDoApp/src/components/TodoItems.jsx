import React from "react";

function TodoItems() {
  return (
    <li className="text-black text-xl p-2 flex justify-between ">
      <span >
        <input type="checkbox" />
        <span className="m-2">Eat</span>
      </span>
      <p>...</p>
    </li>
  );
}

export default TodoItems;
