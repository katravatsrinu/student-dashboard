import React, { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function Settings() {
  const [theme, setTheme] = useState('light');
  const [notifications, setNotifications] = useState(true);
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [language, setLanguage] = useState('english');

  const handleThemeChange = (newTheme) => {
    setTheme(newTheme);
    document.body.setAttribute('data-theme', newTheme);
  };

  return (
    <div>
      <h1 className="dashboard-title">Settings</h1>
      <Card className="mb-4">
        <Card.Header>
          <h5 className="mb-0">Appearance</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mb-3">
            <Form.Label>Theme</Form.Label>
            <div>
              <Form.Check
                inline
                type="radio"
                label="Light"
                name="theme"
                checked={theme === 'light'}
                onChange={() => handleThemeChange('light')}
              />
              <Form.Check
                inline
                type="radio"
                label="Dark"
                name="theme"
                checked={theme === 'dark'}
                onChange={() => handleThemeChange('dark')}
              />
            </div>
          </Form.Group>
          
          <Form.Group className="mb-3">
            <Form.Label>Language</Form.Label>
            <Form.Select value={language} onChange={(e) => setLanguage(e.target.value)}>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </Form.Select>
          </Form.Group>
        </Card.Body>
      </Card>

      <Card className="mb-4">
        <Card.Header>
          <h5 className="mb-0">Notifications</h5>
        </Card.Header>
        <Card.Body>
          <Form.Check
            type="switch"
            id="notification-switch"
            label="Enable push notifications"
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
            className="mb-3"
          />
          <Form.Check
            type="switch"
            id="email-switch"
            label="Receive email updates"
            checked={emailUpdates}
            onChange={(e) => setEmailUpdates(e.target.checked)}
          />
        </Card.Body>
      </Card>

      <Card>
        <Card.Header>
          <h5 className="mb-0">Account Settings</h5>
        </Card.Header>
        <Card.Body>
          <Button variant="danger">Delete Account</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Settings;