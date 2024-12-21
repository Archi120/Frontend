import React from 'react';
import { Link } from 'react-router-dom';

const Grocery = () => {
  const assistants = [
    { id: 3, name: 'Tom the Shopper' },
    { id: 4, name: 'Lucy the Shopper' },
  ];

  return (
    <div>
      <h1>Grocery Assistants</h1>
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

export default Grocery;
