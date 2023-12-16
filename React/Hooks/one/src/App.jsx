import { useState } from 'react'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Reducer from './Hooks/Reducer'


import './App.css'

function App() {

  return (
    <>
      <h1>
        <State/>
        {/* <Effect/> */}
        <Reducer/>
      </h1>
    </>
  )
}

export default App
