import React, { useState } from "react";

function CounterHook() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);
  return (
    <>
      <div class="counter">  {count} </div>
      <div class="button_group">
        <button
          className="subtract"
          onClick={() => setCount((prevCount) => prevCount - 1)}
        >
          Decrement -
        </button>
        <button className="reset" onClick={() => setCount(initialCount)}>
          Reset
        </button>
        <button
          className="add"
          onClick={() => setCount((prevCount) => prevCount + 1)}
        >
          Increment +
        </button>
      </div>
    </>
  );
}

export default CounterHook;
