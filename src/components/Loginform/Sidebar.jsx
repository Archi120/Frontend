import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaDumbbell, FaUserMd, FaHandsHelping, FaUsers, FaBars } from 'react-icons/fa';
import './Sidebar.css';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="sidebar-header">
        <button onClick={toggleSidebar} className="toggle-btn">
          <FaBars />
        </button>
      </div>
      <ul>
        <li>
          <Link to="/physical-fitness">
            <FaDumbbell className="icon" />
            <span className="link-text">Physical Fitness</span>
          </Link>
        </li>
        <li>
          <Link to="/doctor">
            <FaUserMd className="icon" />
            <span className="link-text">Doctor</span>
          </Link>
        </li>
        <li>
          <Link to="/assistance">
            <FaHandsHelping className="icon" />
            <span className="link-text">Assistance</span>
          </Link>
        </li>
        <li>
          <Link to="/social-media">
            <FaUsers className="icon" />
            <span className="link-text">Social Media</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
