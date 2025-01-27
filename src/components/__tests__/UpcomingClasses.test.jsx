import { describe, it, expect, beforeEach } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import UpcomingClasses from '../UpcomingClasses';

describe('UpcomingClasses', () => {
  beforeEach(() => {
    render(<UpcomingClasses />);
  });

  it('renders the component title', () => {
    expect(screen.getByText('Upcoming Classes')).toBeDefined();
  });

  it('shows booked only classes when checkbox is checked', () => {
    const checkbox = screen.getByLabelText('Booked only');
    fireEvent.click(checkbox);
    
    // Only booked classes should be visible
    const bookedClass = screen.getByText('Advanced JavaScript');
    expect(bookedClass).toBeDefined();
    
    // Unbooked class should not be visible
    const unbookedClass = screen.queryByText('Introduction to React');
    expect(unbookedClass).toBeNull();
  });

  it('opens booking modal when Book Now is clicked', () => {
    const bookButton = screen.getByText('Book Now');
    fireEvent.click(bookButton);
    
    expect(screen.getByText('Confirm Booking')).toBeDefined();
  });
});