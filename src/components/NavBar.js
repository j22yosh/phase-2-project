import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar() {
  return (
    <div>This is the Navbar where various links will be displayed!  :D
        <NavLink
        to="/"
        >Home</NavLink>
        <NavBar
        to="/task-list">Things that need doing!</NavBar>
    </div>
  )
}

export default NavBar