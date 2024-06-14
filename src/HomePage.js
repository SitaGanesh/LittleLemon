import React from 'react';
import CallToAction from './CallToAction';
import Specials from './Specials';
import CustomersSay from './CustomersSay';
import Chicago from './Chicago';
import './styles/HomePage.css'; // Assuming styles are stored in styles folder

const HomePage = () => {
  return (
    <div className="home-page">
      <CallToAction />
      <Specials />
      <CustomersSay />
      <Chicago />
    </div>
  );
}

export default HomePage;
