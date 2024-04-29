import React, { useState } from 'react';
import "./contact.css"
import Navbar from "../../components/navbar/Navbar";
import Footer from '../../components/footer/Footer';

function Contact() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [reason, setReason] = useState('');
  const [error, setError] = useState(false);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
    setError(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!reason) {
      setError(true);
      return;
    }
    console.log('Name:', name);
    console.log('Surname:', surname);
    console.log('Email:', email);
    console.log('Message:', message);
    console.log('Reason of Contact:', reason);
    setName('');
    setSurname('');
    setEmail('');
    setMessage('');
    setReason('');
  };

  return (
    <div>
      <Navbar />
      <div className="contact">
        <h1>Contact</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={name} onChange={handleNameChange} />
          </div>
          <div>
            <label>Surname:</label>
            <input type="text" value={surname} onChange={handleSurnameChange} />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" value={email} onChange={handleEmailChange} />
          </div>
          <div>
            <label>Message:</label>
            <textarea value={message} onChange={handleMessageChange}></textarea>
          </div>
          <div>
            <label>Reason of Contact:</label>
            <select value={reason} onChange={handleReasonChange}>
              <option value="">Select a reason*</option>
              <option value="Reservation">Reservation</option>
              <option value="Payment">Payment</option>
              <option value="FAQ">FAQ</option>
            </select>
            {error && <p>Please choose one!</p>}
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contact;