import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}
import React, { useState } from 'react';
import Home from './components/Home';
import Question from './components/question';
import Report from './components/Report';

const App = () => {
  const [quizStarted, setQuizStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const startQuiz = async () => {
    setQuizStarted(true);
    // Fetch questions from mock API or static data
    const mockQuestions = [
      {
        text: 'What is the capital of France?',
        options: ['Paris', 'London', 'Rome'],
        correct: 'Paris',
      },
      {
        text: 'Which is the largest planet?',
        options: ['Earth', 'Jupiter', 'Saturn'],
        correct: 'Jupiter',
      },
    ];
    setQuestions(mockQuestions);
  };

  const submitAnswer = (selectedAnswer) => {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
      setScore(score + 1);
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setQuizStarted(false);
    }
  };

  if (!quizStarted && currentQuestionIndex === 0) {
    return <Home startQuiz={startQuiz} />;
  }

  if (quizStarted) {
    return <Question question={questions[currentQuestionIndex]} submitAnswer={submitAnswer} />;
  }

  return <Report score={score} totalQuestions={questions.length} />;
};

export default App;