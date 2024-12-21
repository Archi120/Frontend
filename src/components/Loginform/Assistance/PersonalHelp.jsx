import React from 'react';
import { Link } from 'react-router-dom';

const PersonalHelp = () => {
  const assistants = [
    { id: 5, name: 'Alex the Helper' },
    { id: 6, name: 'Sam the Helper' },
  ];

  return (
    <div>
      <h1>Personal Help Assistants</h1>
      <ul>
        {assistants.map((assistant) => (
          <li key={assistant.id}>
            <Link to={`/chat/${assistant.id}`}>{assistant.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PersonalHelp;
