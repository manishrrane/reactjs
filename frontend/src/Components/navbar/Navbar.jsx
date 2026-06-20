import React from 'react'
import logo from '../../assets/t1.jpg'
import  './navbar.css'
const Navbar = () => {
  return (
    <>
    <nav className="navbar">


  
    <div className="logo">
        <img src={logo} alt="" />
    </div>
    <div className="navsections">
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact</li>
        </ul>
    </div>
      </nav>
    </>
  )
}

export default Navbar
