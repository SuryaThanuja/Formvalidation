import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDice } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

function App() {
  const [diceNumber, setDiceNumber] = useState(1);

  const rollDice = () => {
    const newNumber = Math.floor(Math.random() * 6) + 1;
    setDiceNumber(newNumber);
  };

  return (
    <div className="app">
      <h1>🎲 Dice Rolling App 🎲</h1>
      <div className="dice-display">
        <FontAwesomeIcon icon={faDice} size="4x" />
        <p className="number">{diceNumber}</p>
      </div>
      <button onClick={rollDice} className="roll-btn">
        Roll Dice
      </button>
    </div>
  );
}

export default App;
