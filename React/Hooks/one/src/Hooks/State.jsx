import React, { useState } from 'react'

const State = () => {
    const[count, setCount] =useState(0)
    
    const increment = () =>{
        setCount((prev)=>(prev+1))
        setCount((prev)=>(prev+1))
    }
    const decrement = () =>{
        setCount((prev)=>(prev-1))
    }


  return (
    <div>
        <div>Count:{count}</div>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default State