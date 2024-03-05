import React, { useState } from 'react';
import axios from 'axios';

const LoginForm = ({ onLoginSuccess }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/api/login', {
        email,
        password,
      });

      onLoginSuccess(response.data.token); // Pass token to parent component
      setError(null); // Clear any previous errors
    } catch (error) {
      console.error(error);
      setError('Invalid email or password'); // Display error message
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Email:</label>
      <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      <label htmlFor="password">Password:</label>
      <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      <button type="submit">Login</button>
      {error && <p className="error-message">{error}</p>}
    </form>
  );
};

export default LoginForm;
