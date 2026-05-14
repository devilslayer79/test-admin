import { useEffect, useState } from "react";

import questions from "./data/questions";
import styles from "./styles/styles";

import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [started, setStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);

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
    const isCorrect =
      selectedAnswer === questions[currentQuestion].answer;
  
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  
    // simpan jawaban user
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: questions[currentQuestion].id,
        question: questions[currentQuestion].text,
        selectedAnswer,
        correctAnswer: questions[currentQuestion].answer,
        options: questions[currentQuestion].options,
        isCorrect,
      },
    ]);
  
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      setFinished(true);
    }
  };

  const percentage = Math.round((score / questions.length) * 100);

  const getResult = () => {
    if (percentage >= 96) return "Sangat Baik";
    if (percentage >= 80) return "Baik";
    if (percentage >= 65) return "Cukup";
    if (percentage >= 50) return "Kurang";
    return "Perlu Belajar";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
  
    return `${minutes}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  if (!started) {
    return (
      <StartScreen
        questions={questions}
        onStart={() => setStarted(true)}
        styles={styles}
      />
    );
  }

  if (finished) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={questions.length}
        percentage={percentage}
        getResult={getResult}
        styles={styles}
        userAnswers={userAnswers}
      />
    );
  }

  return (
    <QuizScreen
      questions={questions}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      handleNext={handleNext}
      timeLeft={timeLeft}
      formatTime={formatTime}
      styles={styles}
    />
  );
  
}