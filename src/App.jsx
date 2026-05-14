import React, { useEffect, useState } from "react";

import questions from "./data/questions";

import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import StartScreen from "./components/StartScreen";

import { formatTime, getResult } from "./utils/helpers";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const [score, setScore] = useState(0);

  const [finished, setFinished] = useState(false);

  const [timeLeft, setTimeLeft] = useState(300);

  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!started) return;

    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, started]);

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].answer) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);

      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);

  // HALAMAN START
  if (!started) {
    return <StartScreen questions={questions} setStarted={setStarted} />;
  }

  // HALAMAN HASIL
  if (finished) {
    return (
      <ResultScreen
        percentage={percentage}
        score={score}
        totalQuestions={questions.length}
        getResult={() => getResult(percentage)}
      />
    );
  }

  // HALAMAN QUIZ
  return (
    <QuizScreen
      questions={questions}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      handleNext={handleNext}
      formatTime={formatTime}
      timeLeft={timeLeft}
    />
  );
}
