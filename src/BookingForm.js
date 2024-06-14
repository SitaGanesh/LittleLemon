import React, { useState } from 'react';
import './styles/BookingForm.css'; // Assuming styles are stored in styles folder

const BookingForm = ({ availableTimes, dispatch }) => {
  const [formData, setFormData] = useState({
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));

    if (id === 'res-date') {
      dispatch({ type: 'UPDATE_TIMES', payload: { date: new Date(value) } });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form">
      <h1>Book Now</h1>
      <label htmlFor="res-date">Choose date</label>
      <input type="date" id="res-date" value={formData.date} onChange={handleChange} />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time}>{time}</option>
        ))}
      </select>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BookingForm;
