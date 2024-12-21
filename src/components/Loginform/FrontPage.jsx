import React from 'react';
import { useNavigate } from 'react-router-dom';
//import './FrontPage.css'; // Optional: Add some custom styling

const FrontPage = () => {
  const navigate = useNavigate();

  const handleClientLogin = () => {
    navigate('/client-login'); // Navigate to the Client Login page
  };

  const handleBondhuLogin = () => {
    navigate('/bondhu-login'); // Navigate to the Bondhu (Assistance) Login page
  };
  //header section--
  
  return (
    <div className="front-page-container">
      <h1>Welcome to Our Service</h1>
      <div className="options">
        <button className="option-button" onClick={handleClientLogin}>Login as Client</button>
        <button className="option-button" onClick={handleBondhuLogin}>Login as Bondhu</button>
      </div>
    </div>
  );
};

export default FrontPage;
