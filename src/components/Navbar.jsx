import React from 'react'
import './style.css'
import logo from './Resources/Logo.png'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className='navbar'>
      <div className="logo">
        <img src={logo} alt="logo" className='logo'/>
      </div>

      <div className="options">
        <ul className='opList'>
          <li><Link to='/' className='links'>Home</Link></li>
          <li><Link to='/about' className='links'>About</Link></li>
          <li><Link to='https://github.com/Shubham-1068' target='_blank' className='links'>My GitHub</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
