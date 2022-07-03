import React from 'react'
import { NavLink } from 'react-router-dom'
import '/home/j22yosh/Development/code/phase2/phase-2-project/src/App.css'

function NavBar() {
  return (
    <div>
        <NavLink style={{marginRight: '10px'}} className="link" to="/">Home</NavLink>
        <NavLink style={{marginRight: '10px'}} classname="link" to="/task-list">TaskList</NavLink>
        <NavLink classname="link" to="/about">About</NavLink>
      
        
    </div>
  )
}

export default NavBar