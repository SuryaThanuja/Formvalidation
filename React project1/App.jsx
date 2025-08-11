import React from 'react';
import Joke from './components/Joke';

const App = () => {
  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Random Joke Generator</h1>
      <Joke />
    </div>
  );
};

export default App;
