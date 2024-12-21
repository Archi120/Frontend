import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerBondhu } from '../../../services/api';
import './Bondhuregister.css';

const BondhuRegister = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: '',
    profilePicture: '',
    number: '',
    address: '',
    idDocument: '',
    latitude: 0,
    longitude: 0,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to format the date or datetime fields
  const formatDateTime = (dateStr) => {
    // If the date string has both date and time
    if (dateStr.includes("T")) {
      const date = new Date(dateStr);
      return date.toISOString().split(".")[0]; // Return in "YYYY-MM-DDTHH:MM:SS" format
    } else {
      return dateStr; // Return as is for dates without time
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Format the dob field before sending
    const formattedDob = formatDateTime(formData.dob);

    try {
      const response = await registerBondhu({
        ...formData,
        dob: formattedDob, // Include the formatted dob
      });
      console.log('Registration successful:', response.data);
      onRegister(); // Call the onRegister prop if it exists
      navigate('/bondhu-login'); // Redirect to Bondhu login after registration
    } catch (error) {
      console.error('Registration failed:', error.response ? error.response.data : error.message);
      alert('Registration failed. Please check your inputs and try again.');
    }
  };

  return (
    <div className="bondhu-register-container">
      <h2>Bondhu Registration</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="dob">Date of Birth</label>
          <input
            type="datetime-local" // Use datetime-local to input both date and time
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="gender">Gender</label>
          <input
            type="text"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="profilePicture">Profile Picture URL</label>
          <input
            type="text"
            name="profilePicture"
            value={formData.profilePicture}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <label htmlFor="number">Phone Number</label>
          <input
            type="text"
            name="number"
            value={formData.number}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="address">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="idDocument">ID Document</label>
          <input
            type="text"
            name="idDocument"
            value={formData.idDocument}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="latitude">Latitude</label>
          <input
            type="number"
            name="latitude"
            value={formData.latitude}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="longitude">Longitude</label>
          <input
            type="number"
            name="longitude"
            value={formData.longitude}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Bondhu-Register</button>
      </form>
    </div>
  );
};

export default BondhuRegister;
