import { useState, useRef } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  let timeRef = useRef(null);

  function startTimer() {
    if(isRunning) return;
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
    setIsRunning(true)
  }

  function stopTimer() {
    clearInterval(timeRef.current);
    timeRef.current = null;
  }

  function resetTimer() {
    setTime(0);
  }

  return (
    <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>start</button>
      <button onClick={stopTimer}>stop</button>
      <button onClick={resetTimer}>reset</button>
    </div>
  );
};

export default Stopwatch;
