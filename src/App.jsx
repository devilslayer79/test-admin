import { useEffect, useState } from "react";

import questions from "./data/questions";
import styles from "./styles/styles";

import StartScreen from "./components/StartScreen";
import QuizScreen from "./components/QuizScreen";
import ResultScreen from "./components/ResultScreen";
import { shuffleArray, shuffleQuestionOptions } from "./utils/helpers";
import { supabase } from "./lib/supabase";

import LoginScreen from "./components/LoginScreen";

export default function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300);
  const [started, setStarted] = useState(false);
  const [userAnswers, setUserAnswers] = useState([]);
  const [quizQuestions, setQuizQuestions] = useState([]);

  const [participantName, setParticipantName] = useState("");
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!started || finished) return;

    if (timeLeft <= 0) {
      finishQuiz();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, started, finished]);

  const handleNext = () => {
    if (isSaving) return;
    const isCorrect = selectedAnswer === quizQuestions[currentQuestion].answer;

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    // simpan jawaban user
    setUserAnswers((prev) => [
      ...prev,
      {
        questionId: quizQuestions[currentQuestion].id,
        question: quizQuestions[currentQuestion].text,
        selectedAnswer,
        correctAnswer: quizQuestions[currentQuestion].answer,
        options: quizQuestions[currentQuestion].options,
        isCorrect,
      },
    ]);

    if (currentQuestion + 1 < quizQuestions.length) {
      setCurrentQuestion((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      finishQuiz();
    }
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);

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

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const finishQuiz = async () => {
    if (finished || isSaving) return;

    setIsSaving(true);

    try {
      await saveResult();

      setFinished(true);
    } catch (error) {
      console.error(error);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePasswordLogin = () => {
    if (passwordInput === "DMP123") {
      setIsAuthenticated(true);
      setPasswordError("");
    } else {
      setPasswordError("Password salah!");
    }
  };

  const saveResult = async () => {
    const percentage = Math.round((score / quizQuestions.length) * 100);

    const { data, error } = await supabase.from("quiz_results").insert([
      {
        participant_name: participantName,
        score: score,
        percentage: percentage,
        total_questions: quizQuestions.length,
        duration: 300 - timeLeft,
        timestamp: new Date().toLocaleString("sv-SE", {
          timeZone: "Asia/Jayapura",
        }),
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
    } else {
      console.log("Berhasil simpan:", data);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setScore(0);
    setFinished(false);
    setTimeLeft(300);
    setStarted(false);
    setUserAnswers([]);
    setQuizQuestions([]);
    setParticipantName("");
  };

  if (!isAuthenticated) {
    return (
      <LoginScreen
        passwordInput={passwordInput}
        setPasswordInput={setPasswordInput}
        passwordError={passwordError}
        handlePasswordLogin={handlePasswordLogin}
        styles={styles}
      />
    );
  }

  if (!started) {
    return (
      <StartScreen
        questions={questions}
        participantName={participantName}
        setParticipantName={setParticipantName}
        onStart={() => {
          const shuffledQuestions = shuffleArray(questions);

          const randomizedQuestions = shuffledQuestions.map((question) =>
            shuffleQuestionOptions(question)
          );

          setQuizQuestions(randomizedQuestions);
          setStarted(true);
        }}
        styles={styles}
      />
    );
  }

  if (finished) {
    return (
      <ResultScreen
        score={score}
        totalQuestions={quizQuestions.length}
        percentage={percentage}
        getResult={getResult}
        styles={styles}
        userAnswers={userAnswers}
        resetQuiz={resetQuiz}
      />
    );
  }

  return (
    <QuizScreen
      questions={quizQuestions}
      currentQuestion={currentQuestion}
      selectedAnswer={selectedAnswer}
      setSelectedAnswer={setSelectedAnswer}
      handleNext={handleNext}
      timeLeft={timeLeft}
      formatTime={formatTime}
      styles={styles}
      isSaving={isSaving}
    />
  );
}
