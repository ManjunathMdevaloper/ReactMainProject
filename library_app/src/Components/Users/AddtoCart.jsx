import React, { useEffect, useState } from 'react'
import '../../assets/styles/addtocart.css'
import { useNavigate } from 'react-router-dom'
const AddtoCart = () => {
  let [book , setBook] = useState([])
  let navigate = useNavigate()
  useEffect(()=>{
    let fetchApi = async ()=>{
      let bookdata =await fetch(`http://localhost:4000/cartitems`)
      let d = await bookdata.json()
      setBook(d)
  }
  fetchApi()
  },[book])
  let viewBook = (id)=>{
    navigate(`/userportal/readbook/${id}`)
  }
  let deleteBook = (id,title)=>{
    let bool = window.confirm(`Do you want to delete ${title} book...?`)
    if(bool){
    fetch(`http://localhost:4000/cartitems/${id}` , {method : "DELETE"})
    alert(`${title} book is deleted`)
    }else{
      alert(`${title} Book is Not deleted`)
    }
  }
  return (
    <>
      <br /><br /><br />
       <div className="add">
       <div className="add-cart">
       <table>
          <thead>
            <tr>
              <th>SIno</th>
              <th>Title</th>
              <th>Image</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
          {
            book.map((ele,index)=>{
              let {title,thumbnailUrl,id} = ele
              return(
                <>
                  <tr>
                    <td>{index+1}</td>
                    <td>{title}</td>
                    <td><img src={thumbnailUrl} alt="" /></td>
                    <span className="action">
                    <td><button onClick={()=>{viewBook(id)}}><img src="https://cdn-icons-png.flaticon.com/128/709/709612.png" /></button></td>
                    <td><button onClick={()=>{deleteBook(id,title)}}><img src="https://cdn-icons-png.flaticon.com/128/10337/10337185.png"/></button></td>
                    </span>
                  </tr>
                </>
              )
            })
          }
          </tbody>
        </table>
       </div>
       </div>
    </>
  )
}

export default AddtoCart
