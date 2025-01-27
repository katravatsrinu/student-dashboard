import React from 'react';
import { Card } from 'react-bootstrap';

function News() {
  const news = [
    {
      id: 1,
      title: 'New Course Offerings',
      content: 'We are excited to announce new courses in AI and Machine Learning.',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'Platform Updates',
      content: 'Recent updates to improve your learning experience.',
      date: '2024-03-14'
    },
    {
      id: 3,
      title: 'Student Achievement',
      content: 'Celebrating our students who have landed great job opportunities.',
      date: '2024-03-13'
    }
  ];

  return (
    <div>
      <h2>Latest News</h2>
      {news.map(item => (
        <Card key={item.id} className="mb-3">
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>{item.content}</Card.Text>
            <Card.Text className="text-muted">{item.date}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default News;