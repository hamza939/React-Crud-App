import React, { useState } from 'react';
import "./Login.css";


const Signup: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Perform user registration logic here using name, email, and password
    console.log('Signup submitted:', name, email, password);
    // Reset the form fields
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='main-wrapper'>
    <div className='login-container'>
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className='input-container'>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className='input-container'>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Signup</button>
      </form>
    </div>
    </div>
  );
};

export default Signup;
