import React from 'react'
import Navbar from '../Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from '../Home'
import Books from '../Books'
import Users from '../Users'
import Contact from '../Contact'
import ReadBook from '../ReadBook'
import AddtoCart from './AddtoCart'

const UsersPortal = () => {
  return (
    <>
        <div>
            <Navbar/>
            <Routes>
                <Route element={<Home/>} path='/'/>
                <Route element={<Books/>} path='/books'/>
                <Route element={<ReadBook/>} path='/readbook/:id'/>
                <Route element={<Users/>} path='/users'/>
                <Route element={<Contact/>} path='/contact'/>
                <Route element={<AddtoCart/>} path='/cartitems'/>
            </Routes>
        </div>
    </>
  )
}

export default UsersPortal
