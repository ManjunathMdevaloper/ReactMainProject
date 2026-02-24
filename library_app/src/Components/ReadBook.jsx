import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/readbook.css'
const ReadBook = () => {
    let params = useParams()
    let loc = useLocation().pathname.startsWith('/adminportal')
    let navigate = useNavigate()
    let [bool, setBool] = useState(false)
    let [long, setLong] = useState(true)
    let bookId = params.id
    let [book, setBook] = useState({})
    useEffect(() => {
        let fetchApi = async () => {
            let bookdata = await fetch(`http://localhost:4000/books/${bookId}`)
            let d = await bookdata.json()
            setBook(d)
        }
        fetchApi()
    }, [])
    let { id, title, isbn, thumbnailUrl, pageCount, status, authors, categories, longDescription, shortDescription } = book
    let handleShort = () => {
        setBool(!bool)
    }
    let handleLong = () => {
        setLong(!long)
    }
    let backBtn = () => {
        loc ?
            navigate('/adminportal/books') : navigate('/userportal/books')
    }
    let addToCart = () => {
        let bool = window.confirm('Do you want to add this book to cart')
        if (bool) {
            fetch('http://localhost:4000/cartitems', {
                method: "POST",
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(book)
            })
            alert('Book is Added')
        } else {
            alert('Book is not added')
        }
    }
    return (
        <div className="read-book-page">
            <div className="read-book-container">
                <div className="read-book-image">
                    <img src={thumbnailUrl} alt={title} />
                </div>
                <div className="read-book-content">
                    <h1>{title}</h1>
                    <div className="read-book-meta">
                        <span><strong>ISBN:</strong> {isbn}</span>
                        <span><strong>Pages:</strong> {pageCount}</span>
                        <span><strong>Status:</strong> {status}</span>
                    </div>

                    <div className="read-book-description">
                        <h3>Synopsis</h3>
                        <p>{shortDescription}</p>
                        <br />
                        {long && (
                            <>
                                <h3>Full Description</h3>
                                <p>{longDescription}</p>
                            </>
                        )}
                        <button onClick={handleLong} style={{ background: 'none', border: 'none', color: 'blue', cursor: 'pointer', padding: '0', display: 'block', marginTop: '10px' }}>
                            {long ? "Show Less" : "Read More..."}
                        </button>
                    </div>

                    <div className="read-book-actions">
                        {!loc && <button onClick={addToCart} className='btn-add-cart'>Add to Cart</button>}
                        <button onClick={backBtn} className='btn-back'>Return to Library</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReadBook
