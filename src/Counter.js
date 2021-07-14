import React,{ useState } from "react";

const Counter = () => {

    const [count, setCount] = useState(0);

  return (
    <div>
      <p>The current value is {count}</p>
      <button onClick={() => {(count === 25) ? alert("You cannot cross 25") : setCount(count+1)}}>Increment</button>
      <button onClick={() => {(count === 0)? alert("You cannot go into negative value") : setCount(count-1)}}>Decrement</button>
      <button onClick={() => {setCount(0)}}>Reset</button>
    </div>
  );
};
export default Counter;
