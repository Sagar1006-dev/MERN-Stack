import React, { useState,useMemo,useEffect } from 'react';

const App = () => {
  const [counter, setCounter] = useState(1);
  const result = useMemo(()=>{
    return factorial(counter)
  },[counter])
  const [name, setName] = useState('');
  const DisplayName = () =>{
    return name;
  }

  return (
    <div className="App p-4">
      <h1 className="text-2xl font-bold">
        Factorial of {counter} is: <span className="text-blue-500">{result}</span>
      </h1>
      <div className="mt-4">
        <button
          className="px-4 py-2 mr-2 bg-blue-500 text-white rounded"
          onClick={() => setCounter(counter - 1)}
        >
          Decrement
        </button>
        <button
          className="px-4 py-2 bg-green-500 text-white rounded"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>
      </div>
      <hr className="my-4" />
      <div>
        <div>
          <label htmlFor="name" className="block">
            Enter Name
          </label>
        </div>
        <input
          type="text"
          id="name"
          className="border p-2"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <hr />
        <DisplayName className="mt-2" DisplayName={DisplayName}></DisplayName>
       
      </div>
    </div>
  );
};

const DisplayName =(({DisplayName})=>{
  const [value, setValue] = useState("")
  useEffect(()=>{
    setValue(DisplayName())
    console.log('Component rendered!');
  },[DisplayName])
  return  <p className="mt-2">My name is {value}</p>
})

function factorial(n) {
  let i =0;
  while(i<2000000) i++;
  if (n < 0) {
    return -1;
  }
  if (n === 0) {
    return 1;
  }
  return n * factorial(n - 1);
}

export default App;
