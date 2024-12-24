import React from 'react'
import '../styles/WhatsappBtn.css'

const WhatsappBtn = () => {
  return (
    <div> 
      <a
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" // Replace with the actual icon URL or local path
        alt="WhatsApp"
        className="whatsapp-icon"
      />
    </a>
    </div>
  )
}

export default WhatsappBtn