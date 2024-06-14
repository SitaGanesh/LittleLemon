// BookingForm.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';

test('renders the BookingForm heading', () => {
  render(<BookingForm />);
  const headingElement = screen.getByText(/book now/i);
  expect(headingElement).toBeInTheDocument();
});

test('form submission updates state', () => {
  render(<BookingForm />);
  const dateInput = screen.getByLabelText(/choose date/i);
  const timeSelect = screen.getByLabelText(/choose time/i);
  const submitButton = screen.getByRole('button', { name: /submit/i });

  fireEvent.change(dateInput, { target: { value: '2024-06-15' } });
  fireEvent.change(timeSelect, { target: { value: '18:00' } });
  fireEvent.click(submitButton);

  // Assert
  expect(dateInput.value).toBe('2024-06-15');
  expect(timeSelect.value).toBe('18:00');
});
