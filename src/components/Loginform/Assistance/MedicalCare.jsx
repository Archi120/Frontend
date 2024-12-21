import React from 'react';
import { Link } from 'react-router-dom';

const MedicalCare = () => {
  // Sample list of assistants (in a real application, you would fetch this data from an API)
  const assistants = [
    { id: 1, name: 'Dr. Smith' },
    { id: 2, name: 'Nurse John' },
  ];

  return (
    <div>
      <h1>Medical Care Assistants</h1>
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

export default MedicalCare;
