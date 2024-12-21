import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './loginform.css'; // Reuse the existing CSS for consistent styling

const BondhuLogin = ({ onLogin }) => {
  const [credentials, setCredentials] = useState({ email: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic for Bondhu login
    onLogin();
    navigate('/bondhu-home'); // Redirect to the home page after successful login
  };

  return (
    <div className="wrapper">
      <h2>Bondhu Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="input-box">
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>Don't have an account? <a href="#" onClick={() => navigate('/assistant/register')}>Bondhu Register</a></p>
    </div>
  );
};

export default BondhuLogin;
