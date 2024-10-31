import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import '../assets/styles/readbook.css'
const ReadBook = () => {
   let params =  useParams()
   let loc = useLocation().pathname.startsWith('/adminportal')
   let navigate = useNavigate()
   let [bool , setBool] = useState(false)
   let [long , setLong] = useState(true)
   let bookId = params.id
   let [book , setBook] = useState({})
   useEffect(()=>{
        let fetchApi = async ()=>{
            let bookdata =await fetch(`http://localhost:4000/books/${bookId}`)
            let d = await bookdata.json()
            setBook(d)
        }
        fetchApi()
   },[book])
   let {id,title,isbn,thumbnailUrl,pageCount,status,authors,categories,longDescription,shortDescription} = book
   let handleShort = ()=>{
    setBool(!bool)
   }
   let handleLong = ()=>{
    setLong(!long)
   }
   let backBtn = ()=>{
    loc?
    navigate('/adminportal/books'):navigate('/userportal/books')
   }
   let addToCart = ()=>{
    let bool = window.confirm('Do you want to add this book to cart')
   if(bool){ fetch('http://localhost:4000/cartitems',{
        method : "POST",
        headers : {'Content-Type' : 'application/json'},
        body : JSON.stringify(book)
    })
        alert('Book is Added')
    }else{
        alert('Book is not added')
    } 
   }
  return (
    <div>
        <br /><br />
        <div className="read-book">
            <div className="container">
                <div className="card">
                    <h4 className='title'>{id} . {title}</h4>
                    <img src={thumbnailUrl} />
                    <h4>ISBN : {isbn}</h4>
                    <h4>Page count : {pageCount}</h4>
                    <h4>Status : {status}</h4>
                    <h4>Authors : {authors}</h4>
                    <h4>Catagory : {categories}</h4>
                    <button onClick={handleShort}>
                        Short Description
                    </button>
                    <div className="short">
                        <h4>{bool ? `Short Description : ${shortDescription}`:""}</h4>
                    </div>
                    <button onClick={handleLong}>
                        Long Description
                    </button>
                   <div className="long">
                        <h4>{long ? "" : `Long Description : ${longDescription}`}</h4>
                   </div>
                   <div className="back">
                        {!loc &&<button onClick={addToCart} className='add'>Add to cart</button>}
                        <button onClick={backBtn}>
                            Back
                        </button>
                   </div>
                </div>
            </div>
        </div>
    </div>
    )
    }

export default ReadBook
