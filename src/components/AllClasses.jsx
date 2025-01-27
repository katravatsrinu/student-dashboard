import React, { useState } from 'react';
import { Card, Table, Badge } from 'react-bootstrap';
import './AllClasses.css'

const allClassesData = Array.from({ length: 50 }, (_, i) => ({
  id: i + 1,
  title: `Class ${i + 1}`,
  instructor: ['Suriya R', 'Leslie Alexander', 'Courtney Henry'][Math.floor(Math.random() * 3)],
  date: new Date(Date.now() + Math.random() * 10 * 24 * 60 * 60 * 1000).toLocaleDateString(),
  status: ['Upcoming', 'Completed', 'In Progress'][Math.floor(Math.random() * 3)],
  attendance: Math.floor(Math.random() * 100) + '%'
}));

function AllClasses() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = allClassesData.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div className="container">
      <h1 className="dashboard-title text-center my-4">All Classes</h1>
      <Card className="shadow-sm">
        <Card.Body>
          <Table responsive="sm">
            <thead>
              <tr>
                <th>#</th>
                <th>Class Name</th>
                <th>Instructor</th>
                <th>Date</th>
                <th>Status</th>
                <th>Attendance</th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.title}</td>
                  <td>{item.instructor}</td>
                  <td>{item.date}</td>
                  <td>
                    <Badge
                      bg={
                        item.status === 'Completed'
                          ? 'success'
                          : item.status === 'In Progress'
                          ? 'warning'
                          : 'primary'
                      }
                    >
                      {item.status}
                    </Badge>
                  </td>
                  <td>{item.attendance}</td>
                </tr>
              ))}
            </tbody>
          </Table>

          <div className="d-flex flex-wrap justify-content-between align-items-center mt-3">
            <button
              className="btn btn-outline-secondary me-2"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((p) => p - 1)}
            >
              Previous
            </button>
            <div className="d-flex flex-wrap">
              {Array.from({ length: Math.ceil(allClassesData.length / itemsPerPage) }, (_, i) => (
                <button
                  key={i}
                  className={`btn ${
                    currentPage === i + 1 ? 'btn-primary' : 'btn-outline-secondary'
                  } me-2 mb-2`}
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </button>
              ))}
            </div>
            <button
              className="btn btn-outline-secondary"
              disabled={currentPage === Math.ceil(allClassesData.length / itemsPerPage)}
              onClick={() => setCurrentPage((p) => p + 1)}
            >
              Next
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default AllClasses;
