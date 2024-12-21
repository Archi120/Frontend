import axios from 'axios';

const API_URL = ' http://127.0.0.1:8000/'; // Backend URL for Client
const BONDHU_API_URL = 'http://127.0.0.1:8000/'; // Backend URL for Bondhu

// Function to handle client registration
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${API_URL}/user/register/`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle client login
export const login = async (credentials) => {
  try {
    const response = await axios.post(`${API_URL}/user/login/`, credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle Bondhu (Assistance) registration
export const registerBondhu = async (userData) => {
  try {
    const response = await axios.post(`${BONDHU_API_URL}/assistant/register/`, userData, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to handle Bondhu (Assistance) login
export const bondhuLogin = async (credentials) => {
  try {
    const response = await axios.post(`${BONDHU_API_URL}/assistant/login/`, credentials, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// function to send new assistance request at api pending/send
export const sendAssistanceRequest = async (payload) => {
  try {
    const response = await axios.post(`${API_URL}/pending/send/`, payload, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};