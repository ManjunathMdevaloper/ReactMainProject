import React from 'react'
import Navbar from '../Navbar'
import { Routes,Route } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import ReadBook from '../ReadBook'
import Addbooks from './Addbooks'
import Users from '../Users'
import AddUser from './AddUser'
import Contact from '../Contact'

const AdminPortal = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route element={<Home/>} path='/'/>
        <Route element={<Books/>} path='/books'/>
        <Route element={<ReadBook/>} path='/readbook/:id'/>
        <Route element={<Addbooks/>} path='/addbooks'/>
        <Route element={<Users/>} path='/users'/>
        <Route element={<AddUser/>} path='/adduser'/>
        <Route element={<Contact/>} path='/contact'/>
      </Routes>
    </div>
  )
}

export default AdminPortal
