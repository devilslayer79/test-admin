import React from "react";
import styles from "../styles/styles";

export default function ResultScreen({
  percentage,
  score,
  totalQuestions,
  getResult,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.resultCard}>
        <h1 style={styles.resultTitle}>Hasil Test</h1>

        <div style={styles.scoreCircle}>
          <span style={styles.scoreText}>
            {percentage}%
          </span>
        </div>

        <h2 style={styles.resultStatus}>
          {getResult()}
        </h2>

        <p style={styles.resultDetail}>
          Jawaban benar: {score} dari {totalQuestions} soal
        </p>

        <div style={styles.gradingBox}>
          <h3>Kriteria Penilaian</h3>

          <ul>
            <li>96 - 100 : Sangat Teliti</li>
            <li>80 - 95 : Baik</li>
            <li>65 - 79 : Cukup</li>
            <li>50 - 64 : Kurang Teliti</li>
            <li>&lt; 50 : Perlu Belajar</li>
          </ul>
        </div>
      </div>
    </div>
  );
}