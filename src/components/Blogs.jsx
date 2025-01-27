import React from 'react';
import { Card } from 'react-bootstrap';

function Blogs() {
  const blogs = [
    {
      id: 1,
      title: 'Getting Started with UI/UX Design',
      excerpt: 'Learn the basics of UI/UX design and how to create user-friendly interfaces.',
      date: '2024-03-15'
    },
    {
      id: 2,
      title: 'The Future of Web Development',
      excerpt: 'Explore upcoming trends in web development and what skills you need to stay ahead.',
      date: '2024-03-14'
    },
    {
      id: 3,
      title: 'Mastering Graphic Design',
      excerpt: 'Tips and tricks for becoming a professional graphic designer.',
      date: '2024-03-13'
    }
  ];

  return (
    <div>
      <h2>Latest Blogs</h2>
      {blogs.map(blog => (
        <Card key={blog.id} className="mb-3">
          <Card.Body>
            <Card.Title>{blog.title}</Card.Title>
            <Card.Text>{blog.excerpt}</Card.Text>
            <Card.Text className="text-muted">{blog.date}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
}

export default Blogs;