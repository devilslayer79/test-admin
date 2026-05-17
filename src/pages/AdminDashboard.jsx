import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";
import AdminLogin from "../components/AdminLogin";
import styles from "../styles/styles";

export default function AdminDashboard() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);
  useEffect(() => {
    fetchResults();
  }, []);
  const fetchResults = async () => {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("created_at", {
        ascending: false,
      });
    if (error) {
      console.error(error);
    } else {
      setResults(data);
    }
    setLoading(false);
  };
  if (!isAdminAuthenticated) {
    return <AdminLogin onSuccess={() => setIsAdminAuthenticated(true)} />;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  const averageScore = results.length
    ? Math.round(
        results.reduce((acc, item) => acc + item.percentage, 0) / results.length
      )
    : 0;
  return (
    <div style={styles.adminDashboardContainer}>
      <div style={styles.adminDashboardHeader}>
        <div>
          <h1 style={styles.adminDashboardTitle}>Dashboard Admin</h1>
          <p style={styles.adminDashboardSubtitle}>Monitoring hasil quiz</p>
        </div>
      </div>
      <div style={styles.adminStatsContainer}>
        <div style={styles.adminStatCard}>
          <div style={styles.adminStatLabel}>Total Peserta</div>
          <div style={styles.adminStatValue}>{results.length}</div>
        </div>
        <div style={styles.adminStatCard}>
          <div style={styles.adminStatLabel}>Rata-rata Nilai</div>
          <div style={styles.adminStatValue}>{averageScore}%</div>
        </div>
      </div>
      <div style={styles.adminTableWrapper}>
        <table style={styles.adminTable}>
          <thead style={styles.adminTableHead}>
            <tr>
              <th style={styles.adminTableHeaderCell}>Nama</th>
              <th style={styles.adminTableHeaderCell}>Score</th>
              <th style={styles.adminTableHeaderCell}>Persentase</th>
              <th style={styles.adminTableHeaderCell}>Durasi</th>
              <th style={styles.adminTableHeaderCell}>Tanggal</th>
              <th style={styles.adminTableHeaderCell}>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {results.map((item) => (
              <tr
                key={item.id}
                style={styles.adminTableRow}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#f8fafc";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#ffffff";
                }}
              >
                <td style={styles.adminTableCell}>{item.participant_name}</td>
                <td style={styles.adminTableCell}>{item.score}</td>
                <td style={styles.adminTableCell}>
                  <span style={styles.adminScoreBadge}>{item.percentage}%</span>
                </td>
                <td style={styles.adminTableCell}>{item.duration} detik</td>
                <td style={styles.adminTableCell}>
                  {new Date(item.created_at).toLocaleString("id-ID", {
                    timeZone: "Asia/Jayapura",
                  })}
                </td>
                <td style={styles.adminTableCell}>
                  <button
                    style={styles.adminActionButton}
                    onClick={() => setSelectedResult(item)}
                  >
                    Detail
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedResult && (
        <div style={styles.adminModalOverlay}>
          <div style={styles.adminModalContent}>
            <div style={styles.adminModalHeader}>
              <h2>Detail Jawaban</h2>
              <button
                style={styles.adminCloseButton}
                onClick={() => setSelectedResult(null)}
              >
                Tutup
              </button>
            </div>
            <h3>Peserta: {selectedResult.participant_name}</h3>
            <p>Score: {selectedResult.score}</p>

            <hr />
            {selectedResult.answers?.map((answer, index) => (
              <div
                key={index}
                style={
                  answer.isCorrect
                    ? styles.adminAnswerCardCorrect
                    : styles.adminAnswerCardWrong
                }
              >
                <h4>Soal {index + 1}</h4>
                <p>
                  <strong>Pertanyaan:</strong> {answer.question}
                </p>
                <p>
                  <strong>Jawaban Kamu:</strong>{" "}
                  {answer.options?.[answer.selectedAnswer]}
                </p>
                <p>
                  <strong>Jawaban Benar:</strong>{" "}
                  {answer.options?.[answer.correctAnswer]}
                </p>
                <p>
                  <strong>Status:</strong>{" "}
                  {answer.isCorrect ? " Benar" : " Salah"}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
