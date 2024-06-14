import React from 'react';
import './styles/CustomersSay.css'; // Assuming styles are stored in styles folder

const CustomersSay = () => {
  // Example testimonials
  const testimonials = [
    { name: 'John Doe', rating: 5, feedback: 'Amazing food!' },
    { name: 'Jane Smith', rating: 4, feedback: 'Great service!' },
  ];

  return (
    <section className="customers-say">
      <h2>What Our Customers Say</h2>
      <ul>
        {testimonials.map((testimonial, index) => (
          <li key={index}>
            <h3>{testimonial.name}</h3>
            <p>Rating: {testimonial.rating} stars</p>
            <p>{testimonial.feedback}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CustomersSay;
