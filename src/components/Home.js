import React from "react";

const Home = ({ startQuiz }) => {
  return (
    <div className="home">
      <h1>Welcome to the Quiz</h1>
      <button onClick={startQuiz}>Start</button>
    </div>
  );
};

export default Home;
