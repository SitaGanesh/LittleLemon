import React from 'react';
import './styles/Specials.css'; // Assuming styles are stored in styles folder

const Specials = () => {
  // Example data, this could come from a data source
  const specials = [
    { name: 'Spaghetti', description: 'Delicious pasta with marinara sauce.' },
    { name: 'Caesar Salad', description: 'Fresh romaine with Caesar dressing.' },
  ];

  return (
    <section className="specials">
      <h2>Specials</h2>
      <ul>
        {specials.map((special, index) => (
          <li key={index}>
            <h3>{special.name}</h3>
            <p>{special.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Specials;
