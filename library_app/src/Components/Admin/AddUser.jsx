import React, { useEffect, useRef, useState } from 'react'
import '../../assets/styles/adduser.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const AddUser = () => {
    let formData = useRef()
    let navigate = useNavigate()
    let [user, setUser] = useState([])
    useEffect(() => {
        axios.get('http://localhost:4000/users')
            .then(resp => {
                setUser(resp)
            })
    }, [])
    let handleSubmit = (e) => {
        e.preventDefault()
        let newUser = {
            fname: formData.current[0].value,
            lname: formData.current[1].value,
            phone: formData.current[2].value,
            email: formData.current[3].value,
            password: "user1234",
            dob: formData.current[5].value,
            place: formData.current[6].value
        }
        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: { 'Content-type': 'application/json' },
            body: JSON.stringify(newUser)
        })
        alert('User is Added')
        navigate('/adminportal/users')
    }

    return (
        <div className="add-user-page">
            <div className="add-user-container">
                <h2>Register New User</h2>
                <form className="add-user-form" ref={formData} onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label>First Name</label>
                            <input type="text" required placeholder='First name' />
                        </div>
                        <div className="form-group">
                            <label>Last Name</label>
                            <input type="text" required placeholder='Last name' />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Phone Number</label>
                        <input type="tel" placeholder='10 digit mobile number' required pattern='[6-9]{1}[0-9]{9}' />
                    </div>
                    <div className="form-group">
                        <label>Email Address</label>
                        <input type="email" placeholder='user@example.com' required />
                    </div>
                    <div className="form-group">
                        <label>Auto-generated Password</label>
                        <input type="password" value="user1234" disabled />
                    </div>
                    <div className="form-group">
                        <label>Date of Birth</label>
                        <input type="date" required />
                    </div>
                    <div className="form-group">
                        <label>Location / Place</label>
                        <input type="text" placeholder='City, State' required />
                    </div>
                    <button type='submit'>Create User Account</button>
                </form>
            </div>
        </div>
    )
}

export default AddUser
