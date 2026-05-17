import React, { useEffect } from "react";
import styles from "../styles/styles";

export default function QuizScreen({
  questions,
  currentQuestion,
  selectedAnswer,
  setSelectedAnswer,
  handleNext,
  formatTime,
  timeLeft,
  isSaving,
}) {
  useEffect(() => {
    const preventCopy = (e) => {
      e.preventDefault();
    };

    const preventSelect = (e) => {
      e.preventDefault();
    };

    const handleKeyDown = (e) => {

      // Ctrl+C
      if (e.ctrlKey && e.key === "c") {
        e.preventDefault();
      }

      // Ctrl+V
      if (e.ctrlKey && e.key === "v") {
        e.preventDefault();
      }

      // Ctrl+X
      if (e.ctrlKey && e.key === "x") {
        e.preventDefault();
      }

      // Ctrl+U
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
      }

      // F12
      if (e.key === "F12") {
        e.preventDefault();
      }

      // Ctrl+Shift+I
      if (
        e.ctrlKey &&
        e.shiftKey &&
        e.key === "I"
      ) {
        e.preventDefault();
      }
    };

    document.addEventListener(
      "copy",
      preventCopy
    );

    document.addEventListener(
      "cut",
      preventCopy
    );

    document.addEventListener(
      "paste",
      preventCopy
    );

    document.addEventListener(
      "contextmenu",
      preventCopy
    );

    document.addEventListener(
      "selectstart",
      preventSelect
    );

    document.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () => {
      document.removeEventListener(
        "copy",
        preventCopy
      );

      document.removeEventListener(
        "cut",
        preventCopy
      );

      document.removeEventListener(
        "paste",
        preventCopy
      );

      document.removeEventListener(
        "contextmenu",
        preventCopy
      );

      document.removeEventListener(
        "selectstart",
        preventSelect
      );

      document.removeEventListener(
        "keydown",
        handleKeyDown
      );
    };
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Test Admin Pembelian</h1>

          <div style={styles.timerBox}>⏱ {formatTime(timeLeft)}</div>

          <p style={styles.questionNumber}>
            Soal {currentQuestion + 1} dari {questions.length}
          </p>
        </div>

        <div style={styles.questionBox}>
          <h2 style={styles.questionText}>{questions[currentQuestion].text}</h2>

          <div style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedAnswer === index ? "#2563eb" : "#ffffff",

                  color: selectedAnswer === index ? "#ffffff" : "#111827",
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={isSaving || selectedAnswer === null}
          style={{
            ...styles.nextButton,

            opacity: isSaving || selectedAnswer === null ? 0.5 : 1,

            cursor:
              isSaving || selectedAnswer === null ? "not-allowed" : "pointer",
          }}
        >
          {isSaving
            ? "Menyimpan..."
            : currentQuestion + 1 === questions.length
            ? "Selesai"
            : "Soal Berikutnya"}
        </button>
      </div>
    </div>
  );
}
