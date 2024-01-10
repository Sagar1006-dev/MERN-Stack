import { useState } from 'react'

import './App.css'

function App() {
  console.log("App renderd", Math.random());
  const [value, setValue] = useState(1)


  // const [multipliedvalue, setMultipliedValue] = useState(1)
  // let multipliedvalue = value * 5
  

  // const multiplybfive =()=>{
  //   // setMultipliedValue(value * 5)
  //   setValue(value  + 1)
  // }

  const clickMe =()=>{
    setValue(1)
  }
  return (
    <>
      <h1>Main value: {value}</h1>
      <button 
      onClick={clickMe}
      >Click to Multiply by 5</button>
      {/* <h2>Multiplied value:{multipliedvalue} </h2> */}
    </>
  )
}

export default App
