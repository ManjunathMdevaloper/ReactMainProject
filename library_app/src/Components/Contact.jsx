import React from 'react'
import '../assets/styles/contact.css'
const Contact = () => {
  return (
    <>
        <br /><br /><br /><br /><br />
        <div className="contact-form">
            <div className="header">Contact Form</div>
            <form>
                <input type="text" placeholder='Enter Name' required />
                <input type="email" placeholder='Enter Email Address' required/>
                <input type="tel" placeholder='Enter Contact Number' required/>
                <textarea placeholder='Help...?'></textarea>
                <button>Submit</button>
            </form>
        </div>
    </>
  )
}

export default Contact
