import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './Chat.css';

const Chat = () => {
  const { id } = useParams(); // Get the assistant ID from the URL
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([...messages, { sender: 'User', text: newMessage }]);
      setNewMessage('');
      // Simulate assistant reply (in a real app, this would involve a backend service)
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: 'Assistant', text: 'How can I help you a? and I love to do this' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="chat-window">
      <h2>Chat with Assistant {id}</h2>
      <div className="chat-messages">
        {messages.map((message, index) => (
          <div key={index} className={`chat-message ${message.sender === 'User' ? 'user' : 'assistant'}`}>
            <strong>{message.sender}:</strong> {message.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message..."
        />
        <button onClick={handleSendMessage}>Send</button>
      </div>
    </div>
  );
};

export default Chat;
