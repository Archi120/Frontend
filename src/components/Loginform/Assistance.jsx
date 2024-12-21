import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Assistance.css';

const Assistance = () => {
  const navigate = useNavigate();

  const handleSelectHelpType = (helpType) => {
    navigate(`/assistance/${helpType}`);
  };

  return (
    <div className="assistance-page">
      <h1>How can we assist you today?</h1>
      <div className="help-options">
        <button onClick={() => handleSelectHelpType('medical-care')}>Medical Care</button>
        <button onClick={() => handleSelectHelpType('grocery')}>Grocery</button>
        <button onClick={() => handleSelectHelpType('personal-help')}>Personal Help</button>
      </div>
    </div>
  );
};

export default Assistance;
