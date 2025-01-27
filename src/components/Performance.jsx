import React from 'react';
import { Card, Row, Col, ProgressBar } from 'react-bootstrap';

function Performance() {
  const performanceData = {
    attendance: 85,
    assignments: 92,
    quizzes: 78,
    projects: 88,
    overallGrade: 'A-',
    recentScores: [
      { subject: 'UI/UX Design', score: 95 },
      { subject: 'Frontend Development', score: 88 },
      { subject: 'Graphic Design', score: 82 },
      { subject: 'Design Theory', score: 90 }
    ]
  };

  return (
    <div>
      <h1 className="dashboard-title">Performance</h1>
      <Row>
        <Col md={8}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Overall Performance</h5>
            </Card.Header>
            <Card.Body>
              <Row>
                <Col md={6} className="mb-3">
                  <h6>Attendance</h6>
                  <ProgressBar now={performanceData.attendance} label={`${performanceData.attendance}%`} />
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Assignments</h6>
                  <ProgressBar now={performanceData.assignments} label={`${performanceData.assignments}%`} />
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Quizzes</h6>
                  <ProgressBar now={performanceData.quizzes} label={`${performanceData.quizzes}%`} />
                </Col>
                <Col md={6} className="mb-3">
                  <h6>Projects</h6>
                  <ProgressBar now={performanceData.projects} label={`${performanceData.projects}%`} />
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card className="mb-4">
            <Card.Header>
              <h5 className="mb-0">Grade Summary</h5>
            </Card.Header>
            <Card.Body>
              <h2 className="text-center mb-0">{performanceData.overallGrade}</h2>
              <p className="text-center text-muted">Overall Grade</p>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Card>
        <Card.Header>
          <h5 className="mb-0">Recent Scores</h5>
        </Card.Header>
        <Card.Body>
          <table className="table">
            <thead>
              <tr>
                <th>Subject</th>
                <th>Score</th>
              </tr>
            </thead>
            <tbody>
              {performanceData.recentScores.map((score, index) => (
                <tr key={index}>
                  <td>{score.subject}</td>
                  <td>{score.score}%</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Performance;