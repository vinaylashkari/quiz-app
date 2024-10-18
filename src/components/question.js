import React, { useState } from "react";

const Question = ({ question, submitAnswer }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleSubmit = () => {
    submitAnswer(selectedAnswer);
  };

  return (
    <div className="question">
      <h2>{question.text}</h2>
      {question.options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            value={option}
            onChange={() => setSelectedAnswer(option)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleSubmit} disabled={!selectedAnswer}>
        Next
      </button>
    </div>
  );
};

export default Question;
