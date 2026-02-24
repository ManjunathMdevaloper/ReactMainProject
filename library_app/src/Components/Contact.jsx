import React from 'react'
import '../assets/styles/contact.css'
const Contact = () => {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <input type="text" placeholder='Your Name' required />
          <input type="email" placeholder='Email Address' required />
          <input type="tel" placeholder='Contact Number' required />
          <textarea rows="5" placeholder='How can we help you?'></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default Contact
