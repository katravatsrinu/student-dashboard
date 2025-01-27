import React from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function CustomerCare() {
  return (
    <div>
      <h2>Customer Care</h2>
      <Card>
        <Card.Body>
          <h5>Contact Support</h5>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Subject</Form.Label>
              <Form.Control type="text" placeholder="Enter subject" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Enter your message" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
          
          <div className="mt-4">
            <h5>Contact Information</h5>
            <p>Email: support@example.com</p>
            <p>Phone: +1 234 567 8900</p>
            <p>Hours: Monday - Friday, 9:00 AM - 6:00 PM</p>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default CustomerCare;