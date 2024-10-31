import React, { useEffect, useRef, useState } from 'react'
import '../../assets/styles/adduser.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
    let formData = useRef()
    let navigate = useNavigate()
    let [user , setUser] = useState([])
    useEffect(()=>{
        axios.get('http://localhost:4000/users')
        .then(resp =>{
            setUser(resp)
        })
    },[user])
    let handleSubmit = (e)=>{
        e.preventDefault()
        let newUser ={
            fname : formData.current[0].value,
            lname : formData.current[1].value,
            phone : formData.current[2].value,
            email : formData.current[3].value,
            password : "user1234",
            dob : formData.current[5].value,
            place : formData.current[6].value
        }
        fetch('http://localhost:4000/users',{
            method : 'POST',
            headers : {'Content-type' : 'application/json'},
            body : JSON.stringify(newUser)
        })
        alert('User is Added')
        navigate('/adminportal/users')
    }
    
  return (
    <>
    <br /><br /><br /><br /><br />
      <div className="user-data">
        <h1 className='title'>Add User</h1>
        <form ref={formData} onSubmit={handleSubmit}>
            <input type="text" required placeholder='Enter First Name'/>
            <input type="text" required placeholder='Enter Last Name'/>
            <input type="tel" placeholder='Enter Phone'required pattern='[6-9]{1}[0-9]{9}'/>
            <input type="email" placeholder='Enter Email' required/>
            <input type="password" placeholder='Enter Password' disabled/>
            <input type="date" />
            <input type="text" placeholder='Enter Place' required/>
            <button type='submit'>Add</button>
        </form>
        
    </div>
    </>
  )
}

export default AddUser
