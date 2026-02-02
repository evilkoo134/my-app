import './NavbarStyles.css'
import React from 'react'
import {Link} from 'react-router-dom'

const nav = () => {
  return (
    <div className='header'>
        <Link to='/'>
          <h1>Testnav</h1>
        </Link>
        <ul className='nav-menu'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/Projects'>Projects</Link>
          </li>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Contact'>Contact</Link>
          </li>
        </ul>
    </div>
  )
}

export default nav
