import React, { useState } from 'react';
import { sendAssistanceRequest } from '../../../services/api';

const AssistanceSelection = () => {
  const [helpType, setHelpType] = useState('');
  const [message, setMessage] = useState('');
  const [location, setLocation] = useState({ latitude: '', longitude: '' });
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;
        setLocation({ latitude, longitude });

        try {
          const response = await sendAssistanceRequest({
            userId: localStorage.getItem('userId'),
            type: helpType,
            message,
            latitude,
            longitude,
          });
          console.log('Request sent:', response);
        } catch (error) {
          console.error('Error sending assistance request:', error);
        } finally {
          setLoading(false);
        }
      }, () => {
        console.error('Failed to get location.');
        setLoading(false);
      });
    } else {
      console.log('Geolocation not supported.');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div>
        <h2>Searching for assistants...</h2>
        <p>Please wait while we find help for you.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Select Assistance Type</h1>
      <div>
        <button onClick={() => setHelpType('Medical Care')}>Medical Care</button>
        <button onClick={() => setHelpType('Grocery')}>Grocery</button>
        <button onClick={() => setHelpType('Personal Help')}>Personal Help</button>
      </div>
      {helpType && (
        <form onSubmit={handleSubmit}>
          <h2>You selected: {helpType}</h2>
          <div>
            <textarea
              placeholder="Enter your message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              cols="50"
            />
          </div>
          <div>
            <button type="submit">Send Request</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default AssistanceSelection;
