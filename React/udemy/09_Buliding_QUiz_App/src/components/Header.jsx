import React from 'react'
import Logo from "../assets/quiz-logo.png"

const Header = () => {
  return (
    <header>
        <img src={Logo} alt="logo" />
        
        <h1>ReactQuiz</h1>
      
    </header>
  )
}

export default Header
