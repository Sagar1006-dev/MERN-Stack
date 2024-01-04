import { useState } from "react";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
      console.log("value Added", counter);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
      console.log("value Removed", counter);
    }
  };
  const reset = () => {
    setCounter(0);
  };
  return (
    <>
      <h1>React Counter Project</h1>
      <h2>Counter Value:{counter}</h2>
      <button onClick={addValue}>Add Value</button>
      <button onClick={removeValue}>Remove Value</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}

export default App;
