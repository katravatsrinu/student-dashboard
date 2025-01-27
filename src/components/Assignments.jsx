import React from 'react';
import { Card } from 'react-bootstrap';

const assignments = [
  {
    id: 1,
    title: 'Logo design for a Airline',
    deadline: '20/06/2024'
  },
  {
    id: 2,
    title: 'UI/UX Design - Ecommerce Mobile app',
    deadline: '22/06/2024'
  },
  {
    id: 3,
    title: 'User Persona and User Journey',
    deadline: '24/06/2024'
  },
  {
    id: 4,
    title: 'Typefaces',
    deadline: '26/06/2024'
  }
];

function Assignments() {
  return (
    <Card>
      <Card.Header className="bg-white">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className="mb-0">Assignments (4)</h5>
        </div>
      </Card.Header>
      <Card.Body className="p-0">
        {assignments.map((assignment) => (
          <div key={assignment.id} className="p-3 border-bottom">
            <h6 className="mb-1">{assignment.title}</h6>
            <small className="text-muted">
              Deadline: {assignment.deadline}
            </small>
          </div>
        ))}
      </Card.Body>
    </Card>
  );
}

export default Assignments;