import React, { useReducer } from 'react';
import { fetchAPI, submitAPI } from './api'; // Adjust path as per your project structure
import BookingForm from './BookingForm';
import { useNavigate } from 'react-router-dom';
import './styles/Main.css'; // Assuming styles are stored in styles folder

const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TIMES':
      return fetchAPI(action.payload.date);
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());
  const navigate = useNavigate();

  const submitForm = (formData) => {
    if (submitAPI(formData)) {
      navigate('/confirmed');
    }
  };

  return (
    <div className="main">
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} submitForm={submitForm} />
    </div>
  );
}

export default Main;
