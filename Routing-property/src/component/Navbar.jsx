import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" className={({isActive}) => isActive ? "active-link" : ""}>Home</NavLink>
                </li>
                <li>
                    <NavLink to="/contact" className={({isActive}) => isActive ? "active-link" : ""}>Contact</NavLink>
                </li>
                <li>
                    <NavLink to="/about" className={({isActive}) => isActive ? "active-link" : ""}>About</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar