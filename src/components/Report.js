import React from "react";

const Report = ({ score, totalQuestions }) => {
  return (
    <div className="report">
      <h2>Quiz Completed!</h2>
      <p>
        Your score is: {score}/{totalQuestions}
      </p>
      <button onClick={() => window.location.reload()}>Start Again</button>
    </div>
  );
};

export default Report;
