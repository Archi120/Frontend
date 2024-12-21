import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './BondhuHome.css';

const BondhuHome = ({ bondhuId }) => {
  const [isSending, setIsSending] = useState(false);
  const [intervalId, setIntervalId] = useState(null);
  const [popupVisible, setPopupVisible] = useState(false);
  const [currentRequest, setCurrentRequest] = useState(null);

  const sendLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;

          try {
            const response = await axios.get('https://243vfqhf-8083.asse.devtunnels.ms/pending/requests', {
              params: { latitude, longitude }
            });

            console.log('Location sent successfully:', response.data);

            // If there's a new request, stop sending location and show the popup
            if (response.data && response.data.length > 0) {
              console.log('New request received:', response.data[0]);
              setCurrentRequest(response.data[0]); // Use the first request for now
              setPopupVisible(true); // Show the popup
              clearInterval(intervalId); // Stop sending location
              setIsSending(false); // Update the sending status
            }
          } catch (error) {
            console.error('Error sending location:', error);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
        },
        { enableHighAccuracy: true }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }
  };

  const toggleSendingLocation = () => {
    if (isSending) {
      clearInterval(intervalId);
      setIsSending(false);
      setIntervalId(null);
      console.log('Stopped sending location.');
    } else {
      sendLocation(); // Send location immediately on button click

      // Set up an interval to send location every 30 seconds
      const id = setInterval(sendLocation, 30000);
      setIntervalId(id);
      setIsSending(true);
      console.log('Started sending location.');
    }
  };

  const handleAccept = async () => {
    if (currentRequest) {
      try {
        const response = await axios.post('https://243vfqhf-8083.asse.devtunnels.ms/pending/confirm', {
          requestId: currentRequest.requestId,
          bondhuId: bondhuId
        });
        console.log('Request accepted:', response.data);
        setPopupVisible(false); // Hide the popup
      } catch (error) {
        console.error('Error accepting request:', error);
      }
    }
  };

  const handleDecline = () => {
    setPopupVisible(false); // Just hide the popup
  };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [intervalId]);

  return (
    <div className="bondhu-home-container">
      <h1>Welcome to Bondhu Home</h1>
      <button onClick={toggleSendingLocation}>
        {isSending ? 'Stop Sending My Location' : 'Start Sending My Location'}
      </button>

      {popupVisible && (
        <div className="popup">
          <div className="popup-inner">
            <h2>New Request</h2>
            <p>Type: {currentRequest.type}</p>
            <p>Description: {currentRequest.description}</p>
            <p>Latitude: {currentRequest.latitude}</p>
            <p>Longitude: {currentRequest.longitude}</p>
            <button onClick={handleAccept}>Accept</button>
            <button onClick={handleDecline}>Decline</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default BondhuHome;
