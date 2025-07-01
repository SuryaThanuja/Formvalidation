import React from 'react';

function Person(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      <h2>Age: {props.age}</h2>
      <h3>Place: {props.place}</h3>
    </div>
  );
}

export default Person;
