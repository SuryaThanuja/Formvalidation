import React, { useState } from 'react';
import Button from './Button';
import './Joke.css';

const Joke = () => {
  const [joke, setJoke] = useState('');

  const callAPI = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const data = await response.json();
      setJoke(`${data.setup} - ${data.punchline}`);
    } catch (error) {
      setJoke('Oops! Failed to fetch joke.');
    }
  };

  return (
    <div className="joke-container">
      <p className="joke-text">{joke}</p>
      <Button callAPI={callAPI} />
    </div>
  );
};

export default Joke;
