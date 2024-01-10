import React from 'react'
import "./App.css";
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

const App = () => {
  return (
    <div>
      <h1>ReduxToolkit</h1>
      <AddTodo/>
      <Todos/>
    </div>
  )
}

export default App