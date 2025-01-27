import React from 'react';
import { Accordion, Card } from 'react-bootstrap';

function HelpCenter() {
  const faqs = [
    {
      id: 1,
      question: 'How do I book a class?',
      answer: 'You can book a class by clicking the "Book now" button next to any upcoming class in the dashboard.'
    },
    {
      id: 2,
      question: 'How can I track my progress?',
      answer: 'Visit the Performance section to view your progress across all courses and assignments.'
    },
    {
      id: 3,
      question: 'What payment methods are accepted?',
      answer: 'We accept all major credit cards, debit cards, and online banking transfers.'
    }
  ];

  return (
    <div>
      <h2>Help Center</h2>
      <Accordion>
        {faqs.map(faq => (
          <Accordion.Item key={faq.id} eventKey={faq.id.toString()}>
            <Accordion.Header>{faq.question}</Accordion.Header>
            <Accordion.Body>{faq.answer}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default HelpCenter;