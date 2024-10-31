import React, { useEffect, useRef, useState } from 'react'
import '../../assets/styles/addbook.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addbooks = () => {
  let formData = useRef()
  let navigate  = useNavigate()
  let [book , setBook] = useState({})
  useEffect(()=>{
      axios
      .get('http://localhost:4000/books')
      .then(resp => {
        setBook(resp.data)
      })
  },[book])
  let idValue = ()=>{
    const id = Number(book[book.length-1].id)
    return id+1;
  }
  let handleSubmit = (e)=>{
    e.preventDefault()
    let newId = idValue()
    let newBook = {
      id : String(newId),
      title : formData.current[0].value,
      isbn : formData.current[1].value,
      pageCount : formData.current[2].value,
      thumbnailUrl : formData.current[3].value,
      shortDescription : formData.current[4].value,
      longDescription : formData.current[5].value,
      status : formData.current[6].value,
      authors : [formData.current[7].value],
      categories : [formData.current[8].value]
    }
    fetch('http://localhost:4000/books',{
      method : 'POST',
      headers : {'Content-type' : 'application/json'},
      body : JSON.stringify(newBook)
    })
    alert('Book is Added')
    navigate('/adminportal/books')
    
  }
  return (
    <div>
        <br /><br /><br />
        <div className="title">
            Add Books
        </div>
        <div className="form">
            <form ref={formData} onSubmit={handleSubmit}>
              <input type="text" name="name" placeholder='Enter Title' required />
              <input type="number" placeholder='Enter ISBN' required/>
              <input type="number" placeholder='Enter Page Count' required />
              <input type="text" placeholder='Enter Image URL' required/>
              <input type="text" placeholder='Enter Short Description'/>
              <input type="text" placeholder='Enter Long Descreption' required/>
              <input type="text" placeholder='Enter Status' required/>
              <input type="text" placeholder='Enter Authors' required/>
              <input type="text" placeholder='Enter Catagory' required/>
              <button>Add Book</button>
               
            </form>
        </div>
    </div>
  )
}

export default Addbooks
