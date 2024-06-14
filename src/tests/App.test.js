// App.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders navigation bar', () => {
  render(<App />);
  const homeLink = screen.getByText(/home/i);
  const reservationLink = screen.getByText(/reservation/i);
  const orderLink = screen.getByText(/order online/i);
  const menuLink = screen.getByText(/menu/i);

  expect(homeLink).toBeInTheDocument();
  expect(reservationLink).toBeInTheDocument();
  expect(orderLink).toBeInTheDocument();
  expect(menuLink).toBeInTheDocument();
});

test('renders footer', () => {
  render(<App />);
  const footerText = screen.getByText(/Little lemon copyright © all rights reserved/i);
  expect(footerText).toBeInTheDocument();
});
