import { useEffect, useRef, useState } from "react";
import Stopwatch from "./component/Stopwatch";

const App = () => {
  const [count, setCount] = useState(0);
  let val = useRef(0);

  function handleCounter() {
    val.current = val.current + 1;
    console.log("value of val:", val);
    setCount(count + 1);
  }

  useEffect(() => {
    console.log("it rendered again");
  });

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleCounter}>Increment</button>
      <Stopwatch />
    </div>
  );
};

export default App;
