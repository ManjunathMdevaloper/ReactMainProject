import React from 'react'
import '../assets/styles/navbar.css'
import { NavLink, useLocation} from 'react-router-dom'
const Navbar = () => {
    let loc = useLocation().pathname
    let bool = loc.startsWith('/adminportal')

  return (
    <>
        <div className="navbar">
            <div className="logo">
                <img src="https://cdn.pixabay.com/animation/2022/10/20/09/17/09-17-14-328_512.gif"/>
            </div>
            <div className="links">
                {
                    bool?
                    <ul>
                    <li><NavLink to="/adminportal/">HOME</NavLink></li>
                    <li><NavLink to="/adminportal/books">BOOKS</NavLink></li>
                    <li><NavLink to="/adminportal/addbooks">ADD BOOKS</NavLink></li>
                    <li><NavLink to="/adminportal/users">USERS</NavLink></li>
                    <li><NavLink to="/adminportal/adduser">ADD USERS</NavLink></li>
                    <li><NavLink to="/adminportal/contact">CONTACT</NavLink></li>
                    <li><NavLink to="/">LOGOUT</NavLink></li>
                </ul>:
                <ul>
                <li><NavLink to="/userportal/">HOME</NavLink></li>
                <li><NavLink to="/userportal/books">BOOKS</NavLink></li>
                <li><NavLink to="/userportal/cartitems">CART</NavLink></li>
                <li><NavLink to="/userportal/users">USERS</NavLink></li>
                <li><NavLink to="/userportal/contact">CONTACT</NavLink></li>
                <li><NavLink to="/">LOGOUT</NavLink></li>
            </ul>
                }
            </div>
        </div>
    </>
  )
}

export default Navbar
