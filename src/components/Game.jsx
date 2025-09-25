import React, { useState } from "react";
import "./game.css";
import bgTomato from "../images/background/bg_tomato3.jpg";

function Game() {
  const questions = [
    {
      question: "Which vitamin is abundant in tomatoes?",
      options: ["Vitamin C", "Vitamin D", "Vitamin B12"],
      answer: "Vitamin C",
    },
    {
      question: "What continent is the origin of tomatoes?",
      options: ["Europe", "South America", "Asia"],
      answer: "South America",
    },
    {
      question: "What color are ripe tomatoes?",
      options: ["Green", "Red", "Blue"],
      answer: "Red",
    },
    {
      question: "What is the powerful antioxidant in tomatoes?",
      options: ["Lycopene", "Beta-carotene", "Anthocyanin"],
      answer: "Lycopene",
    },
    {
      question: "Botanically, tomatoes are classified as?",
      options: ["Vegetable", "Fruit", "Grain"],
      answer: "Fruit",
    },
    {
      question: "Which country produces the most tomatoes in the world?",
      options: ["United States", "Italy", "China"],
      answer: "China",
    },
    {
      question: "When were tomatoes first introduced to Europe?",
      options: ["15th century", "16th century", "17th century"],
      answer: "16th century",
    },
    {
      question: "How many calories are in 100g of tomatoes?",
      options: ["18kcal", "50kcal", "80kcal"],
      answer: "18kcal",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswer = (option) => {
    if (option === questions[current].answer) setScore(score + 1);
    if (current < questions.length - 1) setCurrent(current + 1);
    else setShowScore(true);
  };

  const resetGame = () => {
    setCurrent(0);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="game-page" style={{ backgroundImage: `url(${bgTomato})` }}>
      <div className="game-overlay">
        <h1 className="game-title">Tomato Quiz</h1>
        {showScore ? (
          <div className="score-section">
            <div className="score-display">
              {score} / {questions.length}
            </div>
            <p className="score-message">
              {score === questions.length
                ? "Perfect! 🎉"
                : score >= questions.length * 0.8
                  ? "Great job! 👏"
                  : score >= questions.length * 0.6
                    ? "Good work! 😊"
                    : "Try again! 💪"}
            </p>
            <button className="restart-btn" onClick={resetGame}>
              Try Again
            </button>
          </div>
        ) : (
          <div className="quiz-section">
            <span className="quiz-progress">{current + 1}.</span>
            <span className="quiz-question">{questions[current].question}</span>
            <div className="options">
              {questions[current].options.map((option) => (
                <button key={option} className="option-btn" onClick={() => handleAnswer(option)}>
                  {option}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Game;
