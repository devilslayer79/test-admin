export default function StartScreen({
  questions,
  onStart,
  styles,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.startCard}>
        <h1 style={styles.title}>Test Admin Pembelian</h1>

        <p style={styles.startDescription}>
          Test ini bertujuan untuk mengukur ketelitian, logika kerja, dan
          kemampuan analisa admin dalam proses pembelian dan input data.
        </p>

        <div style={styles.infoBox}>
          <p>📌 Total Soal: {questions.length}</p>
          <p>⏱ Waktu: 5 Menit</p>
          <p>✅ Pilih jawaban paling tepat</p>
        </div>

        <button style={styles.startButton} onClick={onStart}>
          Mulai Test
        </button>
      </div>
    </div>
  );
}