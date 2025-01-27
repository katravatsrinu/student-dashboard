import React, { useState } from 'react';
import { Card, Form, Button, Badge } from 'react-bootstrap';
import { format } from 'date-fns';
import BookingModal from './BookingModal';

const mockClasses = [
  {
    id: 1,
    title: 'UI/UX Designing',
    instructor: 'Suriya R',
    startTime: new Date(),
    time: '0:54',
    isBooked: true,
    isLive: true,
  },
  {
    id: 2,
    title: 'Graphic Designing',
    instructor: 'Priya sweety',
    time: 'Today 6pm',
    timer: '2:40:34',
    isBooked: false,
    isLive: false,
  },
  {
    id: 3,
    title: 'Design Hierarchy',
    instructor: 'Leslie Alexander',
    time: '21st June 10am',
    isBooked: false,
    isLive: false,
  },
  {
    id: 4,
    title: 'Basics of Frontend',
    instructor: 'Courtney Henry',
    time: '21st June 4pm',
    isBooked: false,
    isLive: false,
    daysLeft: '3 days'
  },
  {
    id: 5,
    title: 'Graphic Designing',
    instructor: 'Jerome Bell',
    time: '22nd June 10am',
    isBooked: false,
    isLive: false,
  }
];

function UpcomingClasses() {
  const [showBookedOnly, setShowBookedOnly] = useState(false);
  const [classes, setClasses] = useState(mockClasses);
  const [showModal, setShowModal] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const handleBooking = (classItem) => {
    setSelectedClass(classItem);
    setShowModal(true);
  };

  const confirmBooking = () => {
    setClasses(classes.map(c => 
      c.id === selectedClass.id ? { ...c, isBooked: true } : c
    ));
    setShowModal(false);
  };

  const filteredClasses = showBookedOnly 
    ? classes.filter(c => c.isBooked)
    : classes;

  const totalPages = Math.ceil(filteredClasses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentClasses = filteredClasses.slice(startIndex, endIndex);

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center bg-white border-bottom">
          <div>
            <h5 className="mb-1">Upcoming classes</h5>
            <small className="text-muted">For next 7 days</small>
          </div>
          <Form.Check
            type="checkbox"
            label="Booked only"
            checked={showBookedOnly}
            onChange={(e) => setShowBookedOnly(e.target.checked)}
          />
        </Card.Header>
        <Card.Body className="p-0">
          {currentClasses.map((classItem, index) => (
            <div key={classItem.id} className="p-3 border-bottom">
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center gap-3">
                  <div className="text-muted">{index + 1}</div>
                  <div>
                    <div className="d-flex align-items-center gap-2">
                      <h6 className="mb-0">{classItem.title}</h6>
                      {classItem.isLive && (
                        <div>
                          <Badge bg="danger" className="d-flex align-items-center gap-1">
                            <span className="text-white">• Live</span>
                            <span>({classItem.time})</span>
                          </Badge>
                        </div>
                      )}
                    </div>
                    <div className="text-muted">
                      by {classItem.instructor}
                    </div>
                    <div className="text-muted small">
                      {classItem.time}
                    </div>
                    {classItem.timer && (
                      <div className="text-primary">
                        {classItem.timer}
                      </div>
                    )}
                  </div>
                </div>
                <div>
                  {classItem.isBooked ? (
                    <Button 
                      variant="primary"
                      className="d-flex align-items-center gap-1"
                    >
                      Join now
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M3.33331 8H12.6666M12.6666 8L8.66665 4M12.6666 8L8.66665 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Button>
                  ) : (
                    <Button 
                      variant="outline-secondary"
                      onClick={() => handleBooking(classItem)}
                    >
                      Book now
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </Card.Body>
        <Card.Footer className="bg-white">
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex gap-2">
              <Button 
                variant="outline-secondary" 
                size="sm"
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(p => p - 1)}
              >
                Back
              </Button>
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i}
                  variant={currentPage === i + 1 ? "primary" : "outline-secondary"}
                  size="sm"
                  onClick={() => setCurrentPage(i + 1)}
                >
                  {i + 1}
                </Button>
              ))}
              <Button 
                variant="outline-secondary" 
                size="sm"
                disabled={currentPage === totalPages}
                onClick={() => setCurrentPage(p => p + 1)}
              >
                Next
              </Button>
            </div>
            <div className="d-flex align-items-center gap-2">
              <span className="text-muted">Result per page</span>
              <Form.Select size="sm" style={{ width: 'auto' }}>
                <option>10</option>
                <option>20</option>
                <option>50</option>
              </Form.Select>
            </div>
          </div>
        </Card.Footer>
      </Card>

      <BookingModal
        show={showModal}
        onHide={() => setShowModal(false)}
        onConfirm={confirmBooking}
        classItem={selectedClass}
      />
    </div>
  );
}

export default UpcomingClasses;