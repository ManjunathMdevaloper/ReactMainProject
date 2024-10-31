import React, { useEffect, useState } from 'react'
import '../assets/styles/users.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Users = () => {
    let [data , setData] = useState([])
    let navigate = useNavigate()
    let loc = useLocation().pathname.startsWith('/adminportal')
  useEffect(()=>{
    fetch('http://localhost:4000/users')
    .then(resp => resp.json())
    .then((ele)=>{
      setData(ele)
    })
  },[data])
  let deleteUser = (id,name)=>{
    let bool = window.confirm(`Do You Want delete ${name} user...?`)
    if(bool)
    {
        fetch(`http://localhost:4000/users/${id}`,{method : "DELETE"})
        alert(`${name} is deleted`)
    }else{
        alert(`${name} is not deleted`)
    }
  }
  let adduserNavigate = ()=>{
    navigate('/adminportal/adduser')
  }
  return (
    <>
        <br /><br /><br /> <br /><br /><br /><br />
       <div className="user-form">
       {(data.length !==0) ?
        <>
        <table>
                <thead>
                    <tr>
                        <th>SI.no</th>
                        <th>User Name</th>
                        <th>Contact</th>
                        <th>Email</th>
                        {loc && <th>Password</th>}
                        {loc && <th>Date of Birth</th>}
                        <th>Age</th>
                        <th>Place</th>
                        {loc && <th>Delete</th>}
                    </tr>
                </thead>
            {
                data.map((ele,index)=>{
                    let {id,fname,lname,place,dob,email,password,phone} = ele
                    let dateObj = new Date()
                    let age = dateObj.getFullYear() - Number(dob.slice(0,4))
                    return(
                        <>
                            <tbody>
                            <tr>
                                    <th>{index+1}</th>
                                    <th>{fname} {lname}</th>
                                    <th>{phone}</th>
                                    <th>{email}</th>
                                   {loc &&  <th>{password}</th>}
                                    {loc && <th>{dob}</th>}
                                    <th>{age}</th>
                                    <th>{place}</th>
                                   {loc &&  <th><button onClick={()=>{deleteUser(id,fname)}}>Delete</button></th>}
                                </tr>
                            </tbody>
                            
                        </>
                    )
                })
            }
        </table>
            </>
            :
            <>
            <img src="https://cdn.pixabay.com/photo/2016/05/30/14/23/detective-1424831_1280.png" className='image'/>
                <h1 className='header'>No Data Found...</h1>
                <button onClick={adduserNavigate} className='add-btn'>Add Users...! </button>
            </>
        }
       </div>
    </>
  )
}

export default Users
