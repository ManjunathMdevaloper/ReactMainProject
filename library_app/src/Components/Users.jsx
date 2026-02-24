import React, { useEffect, useState } from 'react'
import '../assets/styles/users.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Users = () => {
    let [data, setData] = useState([])
    let [searchTerm, setSearchTerm] = useState('')
    let navigate = useNavigate()
    let loc = useLocation().pathname.startsWith('/adminportal')
    useEffect(() => {
        fetch('http://localhost:4000/users')
            .then(resp => resp.json())
            .then((ele) => {
                setData(ele)
            })
    }, [])
    let deleteUser = (id, name) => {
        let bool = window.confirm(`Do You Want delete ${name} user...?`)
        if (bool) {
            fetch(`http://localhost:4000/users/${id}`, { method: "DELETE" })
            alert(`${name} is deleted`)
            setData(data.filter(user => user.id !== id))
        } else {
            alert(`${name} is not deleted`)
        }
    }
    let adduserNavigate = () => {
        navigate('/adminportal/adduser')
    }

    const filteredUsers = data.filter(user =>
        `${user.fname} ${user.lname}`.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        user.place?.toLowerCase().includes(searchTerm.toLowerCase())
    )

    return (
        <div className="users-page">
            <div className="users-header">
                <h2 className="title">Platform Users</h2>
                <div className="header-actions">
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search by name, email or place..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                        <span className="search-icon">🔍</span>
                    </div>
                    {loc && (
                        <button onClick={adduserNavigate} className="add-user-btn">
                            <span>+</span> Add User
                        </button>
                    )}
                </div>
            </div>

            <div className="users-list-container">
                {filteredUsers.length !== 0 ? (
                    <div className="table-responsive">
                        <table className="modern-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>User Details</th>
                                    <th>Contact Info</th>
                                    <th>Location</th>
                                    <th>Status/Age</th>
                                    {loc && <th>Admin Actions</th>}
                                </tr>
                            </thead>
                            <tbody>
                                {filteredUsers.map((ele, index) => {
                                    let { id, fname, lname, place, dob, email, password, phone } = ele
                                    let dateObj = new Date()
                                    let age = dob ? dateObj.getFullYear() - Number(dob.slice(0, 4)) : 'N/A'
                                    return (
                                        <tr key={id}>
                                            <td>{index + 1}</td>
                                            <td>
                                                <div className="user-info-cell">
                                                    <div className="user-avatar">{fname[0]}{lname[0]}</div>
                                                    <div className="user-names">
                                                        <div className="full-name">{fname} {lname}</div>
                                                        {loc && <div className="user-pwd">Pwd: {password}</div>}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>
                                                <div className="contact-cell">
                                                    <div>📧 {email}</div>
                                                    <div>📞 {phone}</div>
                                                </div>
                                            </td>
                                            <td>{place}</td>
                                            <td>
                                                <div className="status-cell">
                                                    <span className="age-badge">{age} yrs</span>
                                                    {loc && <div className="dob-text">{dob}</div>}
                                                </div>
                                            </td>
                                            {loc && (
                                                <td>
                                                    <button className="delete-user-btn" onClick={() => { deleteUser(id, fname) }}>
                                                        Delete
                                                    </button>
                                                </td>
                                            )}
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <div className="no-users-found">
                        <img src="https://cdn-icons-png.flaticon.com/512/6134/6134065.png" alt="Not Found" />
                        <h3>No users found matching "{searchTerm}"</h3>
                        {!loc && <p>Contact administrator to add new users.</p>}
                        {loc && <button onClick={adduserNavigate} className="add-btn">Add Users...! </button>}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Users
