import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const UserLogin = () => {
  let [users, setUsers] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    let fetchUserApi = async () => {
      let userApi = await axios
        .get('http://localhost:4000/users')
      setUsers(userApi.data)
    }
    fetchUserApi()
  }, [])
  //Collecting all users emails
  let allUsersMail = users.map(ele => ele.email)
  let emailInput = useRef()
  let pswdInput = useRef()
  let emailField = emailInput.current
  let pswdField = pswdInput.current
  let handleSubmit = (e) => {
    e.preventDefault()
    let email = allUsersMail.includes(emailField.value)
    let password = (pswdField.value === 'user1234')
    if (email && password) {
      navigate('/userportal')
    }
    else {
      let err = `border:solid 3px red`
      emailField.style.cssText = err
      pswdField.style.cssText = err
    }
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder='Enter User Email...' ref={emailInput} />
        <input type="password" placeholder='Enter User Password...' ref={pswdInput} />
        <button className='login-btn'>User Login</button>
      </form>
    </>
  )
}

export default UserLogin
