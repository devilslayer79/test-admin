import React from "react";
import styles from "../styles/styles";

export default function ResultScreen({
  score,
  totalQuestions,
  percentage,
  getResult,
  styles,
  userAnswers,
  resetQuiz,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.resultCard}>
        <h1 style={styles.resultTitle}>Hasil Test</h1>

        <div style={styles.scoreCircle}>
          <span style={styles.scoreText}>{percentage}%</span>
        </div>

        <h2 style={styles.resultStatus}>{getResult()}</h2>

        <p style={styles.resultDetail}>
          Jawaban benar: {score} dari {totalQuestions} soal
        </p>

        <div style={styles.gradingBox}>
          <h3>Kriteria Penilaian</h3>

          <ul>
            <li>96 - 100 : Sangat Baik</li>
            <li>80 - 95 : Baik</li>
            <li>65 - 79 : Cukup</li>
            <li>50 - 64 : Kurang</li>
            <li>&lt; 50 : Perlu Belajar</li>
          </ul>
        </div>

        {/* REVIEW JAWABAN */}
        <div style={{ marginTop: "40px", textAlign: "left" }}>
          <h2 style={{ marginBottom: "20px" }}>Review Jawaban</h2>

          {userAnswers
            .filter((item) => !item.isCorrect)
            .map((item, index) => (
              <div
                key={index}
                style={{
                  marginBottom: "25px",
                  padding: "20px",
                  borderRadius: "16px",
                  backgroundColor: "#f9fafb",
                  border: item.isCorrect
                    ? "2px solid #22c55e"
                    : "2px solid #ef4444",
                }}
              >
                <h3 style={{ marginBottom: "15px" }}>Soal {index + 1}</h3>

                <p style={{ marginBottom: "15px" }}>{item.question}</p>

                <p>
                  <strong>Jawaban Anda:</strong>{" "}
                  {item.options[item.selectedAnswer]}
                </p>

                <p>
                  <strong>Jawaban Benar:</strong>{" "}
                  {item.options[item.correctAnswer]}
                </p>

                <p
                  style={{
                    marginTop: "10px",
                    fontWeight: "bold",
                    color: item.isCorrect ? "#16a34a" : "#dc2626",
                  }}
                >
                  {item.isCorrect ? "✅ Jawaban Benar" : "❌ Jawaban Salah"}
                </p>
              </div>
            ))}
        </div>
        <button style={styles.startButton} onClick={resetQuiz}>
          Kembali ke Menu Awal
        </button>
      </div>
    </div>
  );
}
