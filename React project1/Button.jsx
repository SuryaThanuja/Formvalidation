import React from 'react';
import './Button.css';

const Button = ({ callAPI }) => {
  return (
    <button className="joke-button" onClick={callAPI}>
      Get a Random Joke 😂
    </button>
  );
};

export default Button;
