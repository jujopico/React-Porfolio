import React from 'react'
import './Contact.css'

const Contact = () => (
  <div className="contactContainer">
    <div className="contactPageTtitle">
      CONTACT
    </div>
    <div className="contactTitle">
      Thank you for stopping by. I will get back to you ASAP! 
    </div>
    <form className="contactForm" action="https://formspree.io/sujunqt@gmail.com" method="POST" >
    <div className="contactInfo">
      <div className="contactName">
        <input type="text" name="name" autoComplete="off" placeholder="NAME" required />
      </div>
      <div className="contactEmail">
        <input type="email" name="email" autoComplete="off" placeholder="EMAIL" required />
      </div>
      <div className="contactPhone">
        <input type="phone" name="phone" autoComplete="off" placeholder="PHONE NUMBER" />
      </div>
    </div>
    <div className="contactText">
      <textarea name="message" placeholder="MESSAGE" rows="10" cols="100" required />
    </div>
    <button className="contactButton" type="submit">Submit</button>
    </form>
  </div>
)

export default Contact