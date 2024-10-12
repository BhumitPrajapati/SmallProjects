import React, { useState } from "react";

function UseStateExampal() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h5>count is {count}</h5>
      <button
        className="rounded-lg border-spacing-3 p-2 m-2 bg-green-700"
        onClick={() => setCount(count + 1)}
        type="button"
      >
        Add
      </button>
      <button
        className="rounded-lg border-spacing-3 p-2 m-2 bg-red-700"
        onClick={() => setCount(count - 1)}
        type="button"
      >
        Sub
      </button>
      <h5>count is {count % 2 == 0 ? "Number is even" : "Number is odd"}</h5>
    </div>
  );
}

export default UseStateExampal;
