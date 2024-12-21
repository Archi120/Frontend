import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from './../../services/api';
import './loginform.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const LoginForm = ({ onLogin }) => { 
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    try {
      const response = await login({ userName, password });
      //when no user found a response.error is returned
      if (!response.error) {
        // On successful login, navigate to the home page
        localStorage.setItem('userId', response.user_id);
        onLogin();
        navigate('/home');
      } else {
        setError('Invalid username or password.');
      }
    } catch (err) {
      setError('Invalid username or password.');
    }
  };
  const handleRegisterClick = () => {
    navigate('/user/register'); // Navigate to the register page
  };

  return (
    <div className="wrapper">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Username"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
          <span className="icon">@</span>
        </div>
        <div className="input-box">
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <span className="icon">*</span>
        </div>
        {error && <p className="error-message">{error}</p>}
        <div className="remember-forget">
          <label>
            <input type="checkbox" /> Remember me
          </label>
          <a href="#">Forgot Password?</a>
        </div>
        <button type="submit">Login</button>
        <div className="register-link">
          <p>Don't have an account? <button onClick={handleRegisterClick}>Register here</button></p>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
