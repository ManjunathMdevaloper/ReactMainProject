import React, { useState } from 'react'
import '../assets/styles/navbar.css'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    let loc = useLocation().pathname
    let bool = loc.startsWith('/adminportal')

    const toggleMenu = () => setMenuOpen(!menuOpen)
    const closeMenu = () => setMenuOpen(false)

    const adminLinks = (
        <ul>
            <li><NavLink to="/adminportal/" onClick={closeMenu}>HOME</NavLink></li>
            <li><NavLink to="/adminportal/books" onClick={closeMenu}>BOOKS</NavLink></li>
            <li><NavLink to="/adminportal/addbooks" onClick={closeMenu}>ADD BOOKS</NavLink></li>
            <li><NavLink to="/adminportal/users" onClick={closeMenu}>USERS</NavLink></li>
            <li><NavLink to="/adminportal/adduser" onClick={closeMenu}>ADD USERS</NavLink></li>
            <li><NavLink to="/adminportal/contact" onClick={closeMenu}>CONTACT</NavLink></li>
            <li><NavLink to="/" onClick={closeMenu} className="logout-link">LOGOUT</NavLink></li>
        </ul>
    )

    const userLinks = (
        <ul>
            <li><NavLink to="/userportal/" onClick={closeMenu}>HOME</NavLink></li>
            <li><NavLink to="/userportal/books" onClick={closeMenu}>BOOKS</NavLink></li>
            <li><NavLink to="/userportal/cartitems" onClick={closeMenu}>CART</NavLink></li>
            <li><NavLink to="/userportal/users" onClick={closeMenu}>USERS</NavLink></li>
            <li><NavLink to="/userportal/contact" onClick={closeMenu}>CONTACT</NavLink></li>
            <li><NavLink to="/" onClick={closeMenu} className="logout-link">LOGOUT</NavLink></li>
        </ul>
    )

    return (
        <nav className="navbar">
            <div className="nav-container">
                <div className="logo">
                    <img src="https://cdn.pixabay.com/animation/2022/10/20/09/17/09-17-14-328_512.gif" alt="Logo" />
                    <span className="brand-name">Libraria</span>
                </div>

                <div className={`links-container ${menuOpen ? 'active' : ''}`}>
                    {bool ? adminLinks : userLinks}
                </div>

                <div className="mobile-toggle" onClick={toggleMenu}>
                    <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
                    <div className={`bar ${menuOpen ? 'active' : ''}`}></div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
