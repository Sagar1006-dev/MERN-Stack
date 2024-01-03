import React from 'react'
import Logo from "../../assets/image/Frame 2 1.png"
import styles from "./Nav.module.css"

const Nav = () => {
  return (
    <nav className={`${styles.navigation} container`}>
        <div className='logo'>
           <img src={Logo} alt="logo" /> 
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Nav