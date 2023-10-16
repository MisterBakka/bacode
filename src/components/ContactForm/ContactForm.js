import React from "react";
import "./ContactForm.css";

function ContactForm() {
  return (
    <div id="contact" className="contact-form-container">
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        className="contact-form"
      >
        <h2>Contactez-moi</h2>
        <div className="message" data-netlify="true"></div>
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input type="text" id="name" name="name" /> {/* Ajout de l'attribut "name" */}
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" /> {/* Ajout de l'attribut "name" */}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message"></textarea> {/* Ajout de l'attribut "name" */}
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
