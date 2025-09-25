import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./game.css";

function Game() {
  const navigate = useNavigate();

  const questions = [
    {
      question: "토마토에 풍부한 비타민은?",
      options: ["비타민 C", "비타민 D", "비타민 B12"],
      answer: "비타민 C",
    },
    {
      question: "토마토의 원산지는 어느 대륙인가요?",
      options: ["유럽", "남아메리카", "아시아"],
      answer: "남아메리카",
    },
    {
      question: "잘 익은 토마토의 색깔은?",
      options: ["초록색", "빨간색", "파란색"],
      answer: "빨간색",
    },
    {
      question: "토마토의 주요 성분 중 강력한 항산화제는?",
      options: ["라이코펜", "베타카로틴", "안토시아닌"],
      answer: "라이코펜",
    },
    {
      question: "토마토는 식물학적으로 어디에 분류되나요?",
      options: ["채소", "과일", "곡물"],
      answer: "과일",
    },
    {
      question: "세계에서 토마토 생산량이 가장 많은 나라는?",
      options: ["미국", "이탈리아", "중국"],
      answer: "중국",
    },
    {
      question: "토마토가 유럽에 처음 전해진 시기는?",
      options: ["15세기", "16세기", "17세기"],
      answer: "16세기",
    },
    {
      question: "토마토 100g당 대략적인 칼로리는?",
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
    <div className="game-page">
      <h1>🍅 토마토 퀴즈</h1>
      {showScore ? (
        <div className="score-section">
          <h2>결과</h2>
          <div className="score-display">
            {score} / {questions.length}
          </div>
          <p className="score-message">
            {score === questions.length
              ? "완벽해요! 🎉"
              : score >= questions.length * 0.8
                ? "잘했어요! 👏"
                : score >= questions.length * 0.6
                  ? "괜찮네요! 😊"
                  : "다시 도전해보세요! 💪"}
          </p>
          <button className="restart-btn" onClick={resetGame}>
            다시 시작
          </button>
        </div>
      ) : (
        <div className="quiz-section">
          <div className="progress">
            문제 {current + 1} / {questions.length}
          </div>
          <h3 className="question">{questions[current].question}</h3>
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
  );
}

export default Game;
