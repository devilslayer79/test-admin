export default function StartScreen({
  questions,
  onStart,
  styles,
  participantName,
  setParticipantName,
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
        <input
          type="text"
          placeholder="Masukkan nama peserta"
          value={participantName}
          onChange={(e) => setParticipantName(e.target.value)}
          style={{
            width: "100%",
            padding: "12px",
            borderRadius: "10px",
            border: "1px solid #ccc",
            marginBottom: "20px",
            fontSize: "16px",
          }}
        />
        <button style={styles.startButton} onClick={onStart}>
          Mulai Test
        </button>
      </div>
    </div>
  );
}
