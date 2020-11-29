import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="nav-bar">
        
            <NavLink to="/">
                Home
            </NavLink>

            <NavLink to="/HowTo">
                Help!
            </NavLink>

            <NavLink to="/About">
                About
            </NavLink>
        
        </nav>
    )
}
