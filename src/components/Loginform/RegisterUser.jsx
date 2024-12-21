import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { registerUser } from '../../services/api'; 
import './RegisterUser.css'; 
import dayjs from 'dayjs'; // You can use dayjs or moment for date formatting

const Register = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    number: '',
    address: '',
    dob: '',
    gender: '',
    profilePicture: '',
    userName: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission

    // Format the date to full ISO 8601 format if needed
    const formattedData = {
      ...formData,
      dob: dayjs(formData.dob).format('YYYY-MM-DDTHH:mm:ss') // Format the dob field to ISO 8601
    };

    console.log("Form Data being submitted:", formattedData); // Log the form data
    try {
      const response = await registerUser(formattedData);
      console.log("Server Response:", response); // Log server response
      onRegister(); // Trigger the onRegister function passed as a prop
      navigate('/home'); // Redirect to the home page
    } catch (error) {
      console.error('Error during registration:', error);
      if (error.response) {
        console.error('Server responded with:', error.response.data); // Log the server response data
      }
    }
  };


  return (
    <div>
      <h2>User Registration</h2>
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Name"
          required
        />
        <input
          type="text"
          name="userName"
          value={formData.userName}
          onChange={handleChange}
          placeholder="Username"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          placeholder="Password"
          required
        />
        <input
          type="text"
          name="number"
          value={formData.number}
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleChange}
          placeholder="Address"
          required
        />
        <input
          type="date"
          name="dob"
          value={formData.dob}
          onChange={handleChange}
          placeholder="Date of Birth"
          required
        />
        <input
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          placeholder="Gender"
          required
        />
        <input
          type="text"
          name="profilePicture"
          value={formData.profilePicture}
          onChange={handleChange}
          placeholder="Profile Picture URL"
        />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;
