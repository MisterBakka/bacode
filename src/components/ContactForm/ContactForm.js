import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email && message) {
      setMessageStatus("success");
      // Vous pouvez également envoyer les données à votre serveur ici
    } else {
      setMessageStatus("error");
    }
  };

  return (
    <div id="contact" className="contact-form-container">
      <form onSubmit={handleSubmit} className="contact-form">
        <h2>Contactez-moi</h2>
        {messageStatus === "success" && (
          <div className="message success">
            Votre message a été envoyé avec succès !
          </div>
        )}
        {messageStatus === "error" && (
          <div className="message error">
            Veuillez remplir tous les champs du formulaire.
          </div>
        )}
        <div className="form-group">
          <label htmlFor="name">Nom</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  );
}

export default ContactForm;
