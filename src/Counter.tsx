import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);
  //console.log(arr);
  /* variabl;e - count - Updater function setCount

setCount(10)

state variable - if value changes - compnent gets re-rendered
  */

  //   arr[0];
  //   arr[1];

  //let count = 0;
  return (
    <>
      <div className="border border-3 border-primary p-3">
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}>Click me</button>
      </div>
    </>
  );
};

export default Counter;
