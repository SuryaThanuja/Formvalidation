// src/components/Option.js
import React from "react";

function Option({ option, handleClick, isCorrect, isSelected }) {
  let buttonClass = "list-group-item list-group-item-action";

  if (isSelected) {
    buttonClass += isCorrect ? " bg-success text-white" : " bg-danger text-white";
  }

  return (
    <button
      type="button"
      className={buttonClass}
      onClick={handleClick}
      disabled={isSelected} // prevent multiple clicks on same option
    >
      {option}
    </button>
  );
}

export default Option;
