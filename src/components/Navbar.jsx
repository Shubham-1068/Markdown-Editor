import React from 'react'
import './style.css'
import logo from './Resources/Logo.png'
import option from './Resources/options.svg'
import close from './Resources/close.svg'
import { Link } from 'react-router-dom'

function Navbar() {

  function view(){
    document.querySelector('.list').style.display = 'flex'
    document.querySelector('.list').style.animation = 'popin 0.3s ease-in-out 0s 1 forwards alternate'
  document.querySelector('.options2').style.display = 'none'
  }

  function hide() {
    document.querySelector('.list').style.display = 'none'
  document.querySelector('.options2').style.display = 'flex'
  }

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

      {/* for small screens */}

      <img src={option} alt="options" className='options2' onClick={()=>{view()}} />

      <div className="list">
        <div className="close">
        <img src={close} alt="close" onClick={()=>{hide()}} />
        </div>
          <Link to='/' className='links' onClick={()=>{hide()}}>Home</Link>
          <Link to='/about' className='links' onClick={()=>{hide()}}>About</Link>
          <Link to='https://github.com/Shubham-1068' target='_blank' className='links' onClick={()=>{hide()}}>My GitHub</Link>
      </div>
    </nav>
  )
}

export default Navbar
