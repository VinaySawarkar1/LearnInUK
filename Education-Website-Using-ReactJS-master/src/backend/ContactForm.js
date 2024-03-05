import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/contact', {
        name,
        email,
        message,
      });

      console.log(response.data);
      setName('');
      setEmail('');
      setMessage('');
      setSuccess(true);
    } catch (error) {
      console.error(error);
      // Handle errors (e.g., display an error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} required />
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="message">Message:</label>
      <textarea id="message" value={message} onChange={(e) => setMessage(e.target.value)} required />
      <button type="submit">Submit</button>
      {success && <p className="success-message">Thank you for your message!</p>}
    </form>
  );
};

export default ContactForm;
