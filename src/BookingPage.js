import React from 'react';
import Main from './Main';
import './styles/BookingPage.css'; // Assuming styles are stored in styles folder

const BookingPage = () => {
  return (
    <div className="booking-page">
      <h1>Book a Table</h1>
      <Main />
      {/* Additional content can be added here */}
    </div>
  );
}

export default BookingPage;
