import React, { useState } from 'react'
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import "./App.css"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/sifnup' element={<Signup/>} />
          <Route path='/home' element={<Home/>} />
        </Routes>
      </Router>

    </div>
  )
}

export default App