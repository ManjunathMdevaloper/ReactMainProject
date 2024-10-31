import React, { useEffect, useState } from 'react'
import '../assets/styles/books.css'
import { useLocation, useNavigate } from 'react-router-dom'
const Books = () => {
  let loc = useLocation()
  let path = loc.pathname.startsWith('/adminportal')
  let navigate = useNavigate()
  let readBook = (id)=>{
    path?
    navigate(`/adminportal/readbook/${id}`):navigate(`/userportal/readbook/${id}`)
  }
  let [data , setData] = useState([])
  useEffect(()=>{
    fetch('http://localhost:4000/books')
    .then(resp => resp.json())
    .then((ele)=>{
      setData(ele)
    })
  },[data])
  let deleteById = (id,title)=>{
    let bool = window.confirm(`Do you want to delete ${title} book...?`)
    if(bool){
    fetch(`http://localhost:4000/books/${id}` , {method : "DELETE"})
    alert(`${title} book is deleted`)
    }else{
      alert(`${title} Book is Not deleted`)
    }
  }
  return (
    <>
    <br /><br /><br /><br />
      <div className="books">
        <div className="container">
          {
            data.map((ele)=>{
              let {id,title,isbn,thumbnailUrl,pageCount,status,authors,categories} = ele
              return(
                <>
                  <div className="card">
                    <div className="left">
                      <img src={thumbnailUrl} alt="" />
                      <h4>{title}</h4>
                    </div>
                    <div className="right">
                        <table>
                          <tr>
                            <th colSpan={2} className='title'> {title}</th>
                          </tr>
                          <tr>
                            <th>ID</th>
                            <th>{id}</th>
                          </tr>
                          <hr />
                          <tr>
                            <th>Page Count</th>
                            <th>{pageCount}</th>
                          </tr>
                          <hr />
                          <tr>
                            <th>ISBN</th>
                            <th>{isbn}</th>
                          </tr>
                          <hr />
                          <tr>
                            <th>Status</th>
                            <th>{status}</th>
                          </tr>
                          <hr />
                          <tr>
                            <th>Category</th>
                            <th>{categories}</th>
                          </tr>
                          <hr />
                          <tr>
                            <th>Authors</th>
                            <th>{authors}</th>
                          </tr>
                          <hr />
                        </table>
                        <div className="btn">
                        <button onClick={()=>{readBook(id)}}>Read</button>
                        {
                
                          path&&
                         <button className='del' onClick={()=>{deleteById(id,title)}}>Delete</button>
                        }
                        </div>
                        </div>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default Books
