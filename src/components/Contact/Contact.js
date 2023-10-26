import React from "react";
import "./Contact.css";

function ContactButton() {
  const email = "misterbakka@gmail.com"; 

  const handleContactClick = () => {
    window.location.href = `mailto:${email}`;
  };

  return (
    <div id="contact" className="contact-button-container contact-button">
      <button onClick={handleContactClick}>Contactez-Moi</button>
    </div>
  );
}

export default ContactButton;
