import { useState } from "react";
function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    if (counter < 20) {
      // setCounter(counter + 1);
      setCounter(prevCounter=>prevCounter + 1);
      setCounter(prevCounter=>prevCounter + 1);
      setCounter(prevCounter=>prevCounter + 1);
      setCounter(prevCounter=>prevCounter + 1);
    }
  };
  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <>
      <h1>Counter Project</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={addValue}>Add value: {counter}</button>
      
      <button onClick={removeValue}>remove value: {counter}</button>
    </>
  );
}

export default App;
