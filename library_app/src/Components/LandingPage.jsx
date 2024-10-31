import React, { useState } from 'react'
import '../assets/styles/landingpage.css'
import Admin from './Admin/Admin'
import UserLogin from './Users/UserLogin'
const LandingPage = () => {
   let[bool , setBool] =  useState(true)
   let handleToggle = ()=>{
    setBool(!bool)
   }
  return (
    <>
        <div className="landingpage">
            <div className="container">
                <div className="btn-box">
                    <button onClick={handleToggle} className={bool ? 'admin-btn' : 'user-btn'}>{bool ? <h4>Admin Login</h4> : <h4>User Login</h4> }</button>
                </div>
                <div className="text-box">
                    {bool ? "Admin Page" : "User Page"}
                </div>
                <div className="form-box">
                    {bool?<Admin/>:<UserLogin/>}
                </div>
                <div className="forgetten">
                    <button>Forgot Password</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default LandingPage
