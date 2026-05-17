import React from "react";
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
          disabled={isSaving}
          style={{
            ...styles.nextButton,
            opacity: isSaving ? 0.5 : 1,
            cursor: isSaving ? "not-allowed" : "pointer",
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
