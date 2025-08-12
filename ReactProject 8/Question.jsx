// src/components/Question.jsx
import React from "react";
import Option from "./Option";

function Question({ question, options = [], correctAnswer, onAnswer }) {
  const [selectedOption, setSelectedOption] = React.useState(null);

  const handleClick = (option) => {
    setSelectedOption(option);
    onAnswer(option);
  };

  return (
    <div>
      <h4>{question}</h4>
      <div className="list-group">
        {options.length > 0 &&
          options.map((option, index) => (
            <Option
              key={index}
              option={option}
              handleClick={() => handleClick(option)}
              isCorrect={option === correctAnswer}
              isSelected={selectedOption === option}
            />
          ))}
      </div>
    </div>
  );
}

export default Question;
