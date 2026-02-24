import React, { useEffect, useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Books = () => {
  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')
  let navigate = useNavigate()
  let [data, setData] = useState([])
  let [searchTerm, setSearchTerm] = useState('')

  let readBook = (id) => {
    path ?
      navigate(`/adminportal/readbook/${id}`) : navigate(`/userportal/readbook/${id}`)
  }

  useEffect(() => {
    fetch('http://localhost:4000/books')
      .then(resp => resp.json())
      .then((ele) => {
        setData(ele)
      })
  }, [])

  let deleteById = (id, title) => {
    let bool = window.confirm(`Do you want to delete ${title} book...?`)
    if (bool) {
      fetch(`http://localhost:4000/books/${id}`, { method: "DELETE" })
      alert(`${title} book is deleted`)
      setData(data.filter(book => book.id !== id))
    } else {
      alert(`${title} Book is Not deleted`)
    }
  }

  const filteredData = data.filter(book =>
    book.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.authors?.some(author => author.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  return (
    <div className="books-page">
      <div className="search-container">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search by title or author..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span className="search-icon">🔍</span>
        </div>
      </div>

      <div className="books-grid">
        {filteredData.length > 0 ? (
          filteredData.map((ele) => {
            let { id, title, isbn, thumbnailUrl, pageCount, status, authors, categories } = ele
            return (
              <div className="book-card" key={id}>
                <div className="book-image-container">
                  <img src={thumbnailUrl} alt={title} className="book-thumb" />
                  <div className="book-status-badge">{status}</div>
                </div>
                <div className="book-header">
                  <h3 className="book-title-text">{title}</h3>
                  <div className="book-authors-text">{authors?.join(', ')}</div>
                </div>
                <div className="book-details-list">
                  <div className="detail-row">
                    <span className="label">ISBN:</span>
                    <span className="value">{isbn}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Pages:</span>
                    <span className="value">{pageCount}</span>
                  </div>
                  <div className="detail-row">
                    <span className="label">Category:</span>
                    <span className="value">{categories?.join(', ')}</span>
                  </div>
                </div>
                <div className="book-card-actions">
                  <button className="btn-read" onClick={() => { readBook(id) }}>Read Now</button>
                  {path && (
                    <button className="btn-delete" onClick={() => { deleteById(id, title) }}>Delete</button>
                  )}
                </div>
              </div>
            )
          })
        ) : (
          <div className="no-books-found">
            <img src="https://cdn-icons-png.flaticon.com/512/7486/7486744.png" alt="No books" />
            <p>No books found matching your search</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Books
