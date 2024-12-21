import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/Loginform/loginform.jsx';
import HomePage from './components/Loginform/Homepage.jsx';
import SocialMedia from './components/Loginform/SocialMedia.jsx';
import PhysicalFitness from './components/Loginform/physicalFitness.jsx';
import Doctor from './components/Loginform/doctor.jsx';
import Assistance from './components/Loginform/Assistance.jsx';
import BondhuLogin from './components/Loginform/BondhuLogin.jsx';
import BondhuHome from './components/Loginform/Bondhu/BondhuHome.jsx';
import BondhuRegister from './components/Loginform/Bondhu/Bondhuregister.jsx';
import FrontPage from './components/Loginform/FrontPage.jsx';
import AssistanceSelection from './components/Loginform/Assistance/AssistanceSelection.jsx';
import SidebarLayout from './components/Loginform/SidebarLayout.jsx';
import RegisterUser from './components/Loginform/RegisterUser.jsx';
import './components/Loginform/loginform.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [id, setId] = useState(null);
  const handleLogin = () => {
    setIsAuthenticated(true);
    console.log("User logged in, authentication state updated.");
  };
  // archi
  //lahiri
  // archita lahiri 
  // Define the handleRegister function
  const handleRegister = () => {
    console.log("User registered successfully");
    // You can add additional logic here if needed, such as updating the state or navigating
  };

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={<FrontPage />} // Default route to the FrontPage
        />
        <Route 
          path="/client-login" 
          element={!isAuthenticated ? <LoginForm onLogin={handleLogin} /> : <Navigate to="/home" />}
        />
        <Route 
          path="/bondhu-login" 
          element={!isAuthenticated ? <BondhuLogin onLogin={handleLogin} /> : <Navigate to="/bondhu-home" />}
        />
        <Route 
          path="/home" 
          element={isAuthenticated ? <SidebarLayout><HomePage /></SidebarLayout> : <Navigate to="/" />} 
        />
        <Route 
          path="/bondhu-home" 
          element={isAuthenticated ? <BondhuHome /> : <Navigate to="/bondhu-login" />} 
        />
        <Route 
          path="/social-media" 
          element={isAuthenticated ? <SidebarLayout><SocialMedia /></SidebarLayout> : <Navigate to="/" />} 
        />
        <Route 
          path="/physical-fitness" 
          element={isAuthenticated ? <SidebarLayout><PhysicalFitness /></SidebarLayout> : <Navigate to="/" />} 
        />
        <Route 
          path="/doctor" 
          element={isAuthenticated ? <SidebarLayout><Doctor /></SidebarLayout> : <Navigate to="/" />} 
        />
        <Route 
          path="/assistance" 
          element={isAuthenticated ? <SidebarLayout><AssistanceSelection /></SidebarLayout> : <Navigate to="/" />} 
        />
        <Route 
          path="/assistance/:type" 
          element={isAuthenticated ? <SidebarLayout><AssistanceSelection /></SidebarLayout> : <Navigate to="/" />}
        />
        <Route 
          path="/user/register"  
          element={!isAuthenticated ? <RegisterUser onRegister={handleRegister} /> : <Navigate to="/home" />} 
        />
         <Route 
          path="/assistant/register"  
          element={!isAuthenticated ? <BondhuRegister onRegister={handleRegister} /> : <Navigate to="/bondhu-home" />} 
        />
      </Routes>
    </Router>
  );
};

export default App;
