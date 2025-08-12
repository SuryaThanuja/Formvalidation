import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const quizData = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    correctAnswer: "Mars",
  },
  {
    question: "Who wrote 'Hamlet'?",
    options: ["Leo Tolstoy", "Mark Twain", "William Shakespeare", "Charles Dickens"],
    correctAnswer: "William Shakespeare",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    correctAnswer: "Carbon Dioxide",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    correctAnswer: "Pacific Ocean",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const handleAnswer = (option) => {
    setSelectedOption(option);

    if (option === quizData[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion + 1 < quizData.length) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedOption(null);
      } else {
        setShowResult(true);
      }
    }, 1000); // delay so user sees red/green
  };

  if (showResult) {
    return (
      <div className="container mt-5 text-center">
        <h2>Quiz Completed 🎉</h2>
        <h4>Your Score: {score} / {quizData.length}</h4>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <h4>Question {currentQuestion + 1} of {quizData.length}</h4>
      <h5 className="mb-4">{quizData[currentQuestion].question}</h5>

      <div className="list-group">
        {quizData[currentQuestion].options.map((option, index) => {
          let buttonClass = "list-group-item list-group-item-action";

          if (selectedOption) {
            if (option === quizData[currentQuestion].correctAnswer) {
              buttonClass += " bg-success text-white";
            } else if (option === selectedOption) {
              buttonClass += " bg-danger text-white";
            }
          }

          return (
            <button
              key={index}
              className={buttonClass}
              onClick={() => handleAnswer(option)}
              disabled={selectedOption !== null}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;
