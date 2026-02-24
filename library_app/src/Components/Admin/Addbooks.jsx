import React, { useEffect, useRef, useState } from 'react'
import '../../assets/styles/addbook.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addbooks = () => {
  let formData = useRef()
  let navigate = useNavigate()
  let [book, setBook] = useState({})
  useEffect(() => {
    axios
      .get('http://localhost:4000/books')
      .then(resp => {
        setBook(resp.data)
      })
  }, [])
  let idValue = () => {
    const id = Number(book[book.length - 1].id)
    return id + 1;
  }
  let handleSubmit = (e) => {
    e.preventDefault()
    let newId = idValue()
    let newBook = {
      id: String(newId),
      title: formData.current[0].value,
      isbn: formData.current[1].value,
      pageCount: formData.current[2].value,
      thumbnailUrl: formData.current[3].value,
      shortDescription: formData.current[4].value,
      longDescription: formData.current[5].value,
      status: formData.current[6].value,
      authors: [formData.current[7].value],
      categories: [formData.current[8].value]
    }
    fetch('http://localhost:4000/books', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newBook)
    })
    alert('Book is Added')
    navigate('/adminportal/books')

  }
  return (
    <div className="add-book-page">
      <div className="add-book-container">
        <h2>Add New Book</h2>
        <form className="add-book-form" ref={formData} onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Title</label>
            <input type="text" placeholder='e.g. The Great Gatsby' required />
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <input type="number" placeholder='Enter ISBN number' required />
          </div>
          <div className="form-group">
            <label>Page Count</label>
            <input type="number" placeholder='Total pages' required />
          </div>
          <div className="form-group">
            <label>Thumbnail URL</label>
            <input type="text" placeholder='https://example.com/image.jpg' required />
          </div>
          <div className="form-group full-width">
            <label>Authors (comma separated)</label>
            <input type="text" placeholder='Author 1, Author 2' required />
          </div>
          <div className="form-group">
            <label>Category</label>
            <input type="text" placeholder='e.g. Fiction' required />
          </div>
          <div className="form-group">
            <label>Status</label>
            <input type="text" placeholder='e.g. PUBLISH' required />
          </div>
          <div className="form-group full-width">
            <label>Short Description</label>
            <input type="text" placeholder='Brief hook for the book' />
          </div>
          <div className="form-group full-width">
            <label>Long Description</label>
            <textarea rows="4" placeholder='Detailed plot or overview' required></textarea>
          </div>
          <button className="submit-btn" type="submit">Add to Library</button>
        </form>
      </div>
    </div>
  )
}

export default Addbooks
