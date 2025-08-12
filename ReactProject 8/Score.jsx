import React from 'react'

const Score = ({ score, total, onRestart }) => {
  return (
    <div className="card p-4">
      <div className="card-body">
        <h2>Quiz Completed</h2>
        <p className="h4">Your Score: {score} / {total}</p>
        <button className="btn btn-primary mt-3" onClick={onRestart}>Restart Quiz</button>
      </div>
    </div>
  )
}

export default Score
