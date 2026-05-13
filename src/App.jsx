import React, { useEffect, useState } from 'react';

export default function App() {
  const questions = [
    {
      id: 1,
      text: 'PO tertulis 120 karton, supplier mengirim 118 karton, tetapi nota tertulis 120 karton. Apa tindakan paling tepat?',
      options: [
        'Input sesuai nota agar tidak ribet',
        'Input sesuai barang datang lalu konfirmasi selisih',
        'Input 120 lalu revisi nanti',
        'Tunggu supplier menghubungi terlebih dahulu'
      ],
      answer: 1
    },
    {
      id: 2,
      text: 'Saat input nota, total sistem berbeda Rp 2.000 dari nota supplier. Apa tindakan terbaik?',
      options: [
        'Biarkan karena selisih kecil',
        'Cek ulang qty, harga, dan diskon sebelum save',
        'Sesuaikan manual tanpa cek',
        'Input sesuai feeling paling mendekati'
      ],
      answer: 1
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(200);

  useEffect(() => {
    if (timeLeft <= 0) {
      setFinished(true);
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

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

  const getResult = () => {
    if (percentage >= 96) return 'Sangat Teliti & Sangat Layak';
    if (percentage >= 80) return 'Baik & Layak';
    if (percentage >= 65) return 'Cukup, Perlu Pembinaan';
    if (percentage >= 50) return 'Kurang Teliti';
    return 'Tidak Direkomendasikan';
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  if (finished) {
    return (
      <div style={styles.page}>
        <div style={styles.resultCard}>
          <h1 style={styles.resultTitle}>Hasil Test</h1>

          <div style={styles.scoreCircle}>
            <span style={styles.scoreText}>{percentage}%</span>
          </div>

          <h2 style={styles.resultStatus}>{getResult()}</h2>

          <p style={styles.resultDetail}>
            Jawaban benar: {score} dari {questions.length} soal
          </p>

          <div style={styles.gradingBox}>
            <h3>Kriteria Penilaian</h3>
            <ul>
              <li>96 - 100 : Sangat Teliti & Sangat Layak</li>
              <li>80 - 95 : Baik & Layak</li>
              <li>65 - 79 : Cukup, Perlu Pembinaan</li>
              <li>50 - 64 : Kurang Teliti</li>
              <li>&lt; 50 : Tidak Direkomendasikan</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Test Ketelitian Admin Gudang</h1>

          <div style={styles.timerBox}>
            ⏱ {formatTime(timeLeft)}
          </div>

          <p style={styles.questionNumber}>
            Soal {currentQuestion + 1} dari {questions.length}
          </p>
        </div>

        <div style={styles.questionBox}>
          <h2 style={styles.questionText}>
            {questions[currentQuestion].text}
          </h2>

          <div style={styles.optionsContainer}>
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => setSelectedAnswer(index)}
                style={{
                  ...styles.optionButton,
                  backgroundColor:
                    selectedAnswer === index ? '#2563eb' : '#ffffff',
                  color: selectedAnswer === index ? '#ffffff' : '#111827'
                }}
              >
                {option}
              </button>
            ))}
          </div>
        </div>

        <button
          onClick={handleNext}
          disabled={selectedAnswer === null}
          style={{
            ...styles.nextButton,
            opacity: selectedAnswer === null ? 0.5 : 1,
            cursor: selectedAnswer === null ? 'not-allowed' : 'pointer'
          }}
        >
          {currentQuestion + 1 === questions.length
            ? 'Selesai'
            : 'Soal Berikutnya'}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    background: 'linear-gradient(to bottom right, #dbeafe, #eff6ff)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif'
  },

  card: {
    width: '100%',
    maxWidth: '950px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
  },

  header: {
    textAlign: 'center',
    marginBottom: '35px'
  },

  title: {
    fontSize: '52px',
    fontWeight: 'bold',
    marginBottom: '15px',
    color: '#111827'
  },

  timerBox: {
    display: 'inline-block',
    backgroundColor: '#eff6ff',
    color: '#2563eb',
    padding: '10px 20px',
    borderRadius: '999px',
    fontWeight: 'bold',
    fontSize: '20px',
    marginBottom: '12px'
  },

  questionNumber: {
    fontSize: '18px',
    color: '#6b7280'
  },

  questionBox: {
    marginBottom: '35px'
  },

  questionText: {
    fontSize: '32px',
    lineHeight: '1.5',
    textAlign: 'center',
    color: '#111827',
    marginBottom: '35px'
  },

  optionsContainer: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '16px'
  },

  optionButton: {
    padding: '18px',
    borderRadius: '16px',
    border: '2px solid #dbeafe',
    fontSize: '18px',
    fontWeight: '500',
    transition: '0.2s',
    cursor: 'pointer'
  },

  nextButton: {
    width: '100%',
    padding: '18px',
    backgroundColor: '#2563eb',
    color: '#ffffff',
    border: 'none',
    borderRadius: '16px',
    fontSize: '20px',
    fontWeight: 'bold'
  },

  resultCard: {
    width: '100%',
    maxWidth: '650px',
    backgroundColor: '#ffffff',
    borderRadius: '24px',
    padding: '40px',
    textAlign: 'center',
    boxShadow: '0 15px 40px rgba(0,0,0,0.1)'
  },

  resultTitle: {
    fontSize: '42px',
    marginBottom: '25px'
  },

  scoreCircle: {
    width: '180px',
    height: '180px',
    borderRadius: '50%',
    backgroundColor: '#2563eb',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 25px auto'
  },

  scoreText: {
    color: '#ffffff',
    fontSize: '48px',
    fontWeight: 'bold'
  },

  resultStatus: {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#111827'
  },

  resultDetail: {
    fontSize: '18px',
    color: '#6b7280',
    marginBottom: '30px'
  },

  gradingBox: {
    backgroundColor: '#f9fafb',
    padding: '20px',
    borderRadius: '16px',
    textAlign: 'left',
    lineHeight: '1.8'
  }
};