import React, { useEffect, useState } from 'react'
import '../../assets/styles/addtocart.css'
import { useNavigate } from 'react-router-dom'
const AddtoCart = () => {
  let [book, setBook] = useState([])
  let navigate = useNavigate()
  useEffect(() => {
    let fetchApi = async () => {
      let bookdata = await fetch(`http://localhost:4000/cartitems`)
      let d = await bookdata.json()
      setBook(d)
    }
    fetchApi()
  }, [])
  let viewBook = (id) => {
    navigate(`/userportal/readbook/${id}`)
  }
  let deleteBook = (id, title) => {
    let bool = window.confirm(`Do you want to delete ${title} book...?`)
    if (bool) {
      fetch(`http://localhost:4000/cartitems/${id}`, { method: "DELETE" })
      alert(`${title} book is deleted`)
    } else {
      alert(`${title} Book is Not deleted`)
    }
  }
  return (
    <div className="cart-page">
      <div className="cart-container">
        <table className="cart-table">
          <thead>
            <tr>
              <th>#</th>
              <th>Book Title</th>
              <th>Cover</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {book.map((ele, index) => {
              let { title, thumbnailUrl, id } = ele
              return (
                <tr key={id}>
                  <td>{index + 1}</td>
                  <td><strong>{title}</strong></td>
                  <td><img src={thumbnailUrl} alt={title} className="cart-book-img" /></td>
                  <td>
                    <div className="cart-actions">
                      <button className="btn-view" title="View Details" onClick={() => { viewBook(id) }}>
                        <img className="btn-icon" src="https://cdn-icons-png.flaticon.com/128/709/709612.png" alt="view" />
                      </button>
                      <button className="btn-remove" title="Remove from Cart" onClick={() => { deleteBook(id, title) }}>
                        <img className="btn-icon" src="https://cdn-icons-png.flaticon.com/128/10337/10337185.png" alt="delete" />
                      </button>
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        {book.length === 0 && (
          <div style={{ padding: '50px', textAlign: 'center', color: '#636e72' }}>
            <h3>Your cart is empty</h3>
            <p>Go to the books section to add some!</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default AddtoCart
