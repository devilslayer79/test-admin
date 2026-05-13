import React, { useEffect, useState } from "react";

export default function App() {
  const questions = [
    {
      id: 1,
      text: "PO tertulis 120 karton, supplier mengirim 118 karton, tetapi nota tertulis 120 karton. Apa tindakan paling tepat?",
      options: [
        "Input sesuai nota agar tidak ribet",
        "Input sesuai barang datang lalu konfirmasi selisih",
        "Input 120 lalu revisi nanti",
        "Tunggu supplier menghubungi terlebih dahulu",
      ],
      answer: 1,
    },
    {
      id: 2,
      text: "Saat input nota, total sistem berbeda Rp 2.000 dari nota supplier. Apa tindakan terbaik?",
      options: [
        "Biarkan karena selisih kecil",
        "Cek ulang qty, harga, dan diskon sebelum save",
        "Sesuaikan manual tanpa cek",
        "Input sesuai feeling paling mendekati",
      ],
      answer: 1,
    },
    {
      id: 3,
      text: "Ada dua nota dengan nomor hampir sama dan nominal mirip. Apa risiko terbesar jika tidak teliti?",
      options: [
        "Data supplier terlambat",
        "Terjadi double input pembelian",
        "Gudang menjadi penuh",
        "Barang menjadi expired",
      ],
      answer: 1,
    },
    {
      id: 4,
      text: "Supplier meminta nota segera diinput, tetapi fisik barang belum dicek gudang. Apa tindakan terbaik?",
      options: [
        "Langsung input agar supplier senang",
        "Input sebagian dulu tanpa konfirmasi",
        "Tunggu verifikasi fisik sebelum final input",
        "Input semua lalu edit nanti",
      ],
      answer: 2,
    },
    {
      id: 5,
      text: "Jika qty di nota menggunakan dus, tetapi gudang menghitung dalam pcs, apa yang harus dilakukan?",
      options: [
        "Input langsung tanpa konversi",
        "Pastikan konversi satuan benar sebelum input",
        "Gunakan perkiraan",
        "Ikuti qty paling kecil",
      ],
      answer: 1,
    },
    {
      id: 6,
      text: "Apa risiko terbesar jika admin terlalu fokus cepat tetapi jarang cek ulang?",
      options: [
        "Kerja cepat terlihat bagus",
        "Kesalahan data bisa mempengaruhi stok dan laporan",
        "Supplier menjadi lebih cepat kirim",
        "Gudang menjadi lebih kosong",
      ],
      answer: 1,
    },
    {
      id: 7,
      text: "Supplier mengirim bonus 2 karton tanpa tercantum di nota. Apa tindakan paling tepat?",
      options: [
        "Input sebagai pembelian biasa",
        "Abaikan bonus tersebut",
        "Konfirmasi status bonus sebelum input",
        "Tambahkan qty diam-diam",
      ],
      answer: 2,
    },
    {
      id: 8,
      text: "Saat tekanan kerja tinggi, apa prioritas utama admin pembelian?",
      options: [
        "Selesaikan cepat tanpa cek",
        "Menunggu pekerjaan berkurang",
        "Menjaga ketelitian sambil mengatur prioritas",
        "Input berdasarkan perkiraan",
      ],
      answer: 2,
    },
    {
      id: 9,
      text: "Jika supplier menyangkal adanya selisih barang, langkah paling profesional adalah?",
      options: [
        "Memaksa supplier mengaku",
        "Menunjukkan data penerimaan dan nota secara jelas",
        "Diam agar masalah selesai",
        "Langsung batalkan kerja sama",
      ],
      answer: 1,
    },
    {
      id: 10,
      text: "Apa dampak jika salah input satu digit harga beli barang?",
      options: [
        "Tidak terlalu berpengaruh",
        "Bisa mempengaruhi margin dan laporan keuntungan",
        "Hanya supplier yang rugi",
        "Gudang menjadi lebih lambat",
      ],
      answer: 1,
    },
    {
      id: 11,
      text: "Terdapat barang dengan nama hampir sama: 'Teh Pucuk 350ml' dan 'Teh Pucuk 330ml'. Apa tindakan terbaik?",
      options: [
        "Input yang paling sering dibeli",
        "Samakan saja karena mirip",
        "Cek barcode atau detail produk sebelum input",
        "Input acak lalu revisi",
      ],
      answer: 2,
    },
    {
      id: 12,
      text: "Jika nota supplier sulit dibaca, apa yang paling tepat dilakukan?",
      options: [
        "Menebak isi nota",
        "Konfirmasi ulang sebelum input",
        "Input sesuai perkiraan harga",
        "Lewati barang yang tidak jelas",
      ],
      answer: 1,
    },
    {
      id: 13,
      text: "Apa risiko jika admin tidak mengecek diskon pembelian dari supplier?",
      options: [
        "Perusahaan bisa rugi atau laba tidak akurat",
        "Supplier menjadi marah",
        "Barang menjadi rusak",
        "Gudang menjadi penuh",
      ],
      answer: 0,
    },
    {
      id: 14,
      text: "Dalam kondisi nota menumpuk, bagaimana cara kerja paling efektif?",
      options: [
        "Kerjakan yang paling mudah saja",
        "Kerjakan acak agar cepat selesai",
        "Prioritaskan sambil tetap cek detail data",
        "Input semua tanpa cek lalu revisi",
      ],
      answer: 2,
    },
    {
      id: 15,
      text: "Jika ditemukan selisih stok setelah input pembelian, apa langkah pertama?",
      options: [
        "Mengubah stok manual tanpa cek",
        "Cek histori transaksi dan nota terkait",
        "Menghapus transaksi terbaru",
        "Menyalahkan gudang",
      ],
      answer: 1,
    },
    {
      id: 16,
      text: "Apa alasan pentingnya mencocokkan PO, nota, dan barang datang?",
      options: [
        "Agar pekerjaan terlihat lama",
        "Untuk memastikan data dan barang sesuai",
        "Karena supplier meminta",
        "Agar gudang lebih sibuk",
      ],
      answer: 1,
    },
    {
      id: 17,
      text: "Jika ada barang rusak tetapi supplier meminta tetap diinput penuh, apa tindakan terbaik?",
      options: [
        "Input penuh agar cepat selesai",
        "Tolak seluruh barang tanpa laporan",
        "Catat kerusakan dan konfirmasi prosedur retur",
        "Kurangi qty diam-diam",
      ],
      answer: 2,
    },
    {
      id: 18,
      text: "Saat melakukan input cepat, apa kebiasaan yang paling membantu mengurangi error?",
      options: [
        "Tidak melihat ulang data",
        "Menghafal harga barang",
        "Melakukan pengecekan singkat sebelum save",
        "Langsung print setelah input",
      ],
      answer: 2,
    },
    {
      id: 19,
      text: "Jika supplier memberikan revisi nota setelah data terinput, apa tindakan yang benar?",
      options: [
        "Biarkan data lama",
        "Edit tanpa menyimpan bukti",
        "Verifikasi revisi lalu update data sesuai prosedur",
        "Hapus semua transaksi",
      ],
      answer: 2,
    },
    {
      id: 20,
      text: "Apa ciri admin pembelian yang paling baik dalam pekerjaan sehari-hari?",
      options: [
        "Cepat tetapi sering salah",
        "Teliti, konsisten, dan mampu komunikasi dengan baik",
        "Jarang bertanya walaupun bingung",
        "Mengandalkan hafalan tanpa cek data",
      ],
      answer: 1,
    },
    {
      id: 21,
      text: "Supplier mengirim 120 karton, tetapi PO hanya 100 karton. Apa tindakan terbaik?",
      options: [
        "Terima semua tanpa cek",
        "Tolak seluruh barang",
        "Konfirmasi selisih ke supplier dan atasan",
        "Input sesuai barang datang",
      ],
      answer: 2,
    },
    {
      id: 22,
      text: "Jika supplier meminta pembayaran dipercepat tetapi data pembelian masih belum lengkap, apa tindakan terbaik?",
      options: [
        "Langsung proses pembayaran agar supplier tidak marah",
        "Menunggu tanpa memberi kabar",
        "Pastikan dokumen dan data pembelian valid sebelum diproses",
        "Menyuruh gudang memutuskan sendiri",
      ],
      answer: 2,
    },
    {
      id: 23,
      text: "Saat input pembelian, ditemukan barcode barang berbeda tetapi nama barang hampir sama. Apa risiko terbesar jika diabaikan?",
      options: [
        "Laporan penjualan bisa salah produk",
        "Supplier terlambat kirim",
        "Gudang menjadi kosong",
        "Tidak ada dampak",
      ],
      answer: 0,
    },
    {
      id: 24,
      text: "Jika ditemukan selisih total Rp 50.000 antara nota dan sistem, apa yang harus dilakukan?",
      options: [
        "Biarkan karena nominal kecil",
        "Cari sumber selisih sebelum save",
        "Kurangi qty barang",
        "Hapus transaksi",
      ],
      answer: 1,
    },
    {
      id: 25,
      text: "Apa tindakan terbaik jika supplier menyangkal kesalahan pengiriman barang?",
      options: [
        "Marah kepada supplier",
        "Diam dan menerima kerugian",
        "Tunjukkan bukti nota, PO, dan data penerimaan dengan sopan",
        "Langsung blacklist supplier",
      ],
      answer: 2,
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [finished, setFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(250);
  const [started, setStarted] = useState(false);

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
    if (percentage >= 96) return "Sangat Teliti";
    if (percentage >= 80) return "Baik";
    if (percentage >= 65) return "Cukup";
    if (percentage >= 50) return "Kurang Teliti";
    return "Perlu Belajar";
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  // HALAMAN START
  if (!started) {
    return (
      <div style={styles.page}>
        <div style={styles.startCard}>
          <h1 style={styles.title}>Test Ketelitian Admin Gudang</h1>

          <p style={styles.startDescription}>
            Test ini bertujuan untuk mengukur ketelitian, logika kerja, dan
            kemampuan analisa admin dalam proses pembelian dan input
            data.
          </p>

          <div style={styles.infoBox}>
            <p>📌 Total Soal: {questions.length}</p>
            <p>⏱ Waktu: 4 Menit</p>
            <p>✅ Pilih jawaban paling tepat</p>
          </div>

          <button style={styles.startButton} onClick={() => setStarted(true)}>
            Mulai Test
          </button>
        </div>
      </div>
    );
  }

  // HALAMAN HASIL
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

  // HALAMAN SOAL
  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.header}>
          <h1 style={styles.title}>Test Ketelitian Admin Gudang</h1>

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
          disabled={selectedAnswer === null}
          style={{
            ...styles.nextButton,
            opacity: selectedAnswer === null ? 0.5 : 1,
            cursor: selectedAnswer === null ? "not-allowed" : "pointer",
          }}
        >
          {currentQuestion + 1 === questions.length
            ? "Selesai"
            : "Soal Berikutnya"}
        </button>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    background: "linear-gradient(to bottom right, #dbeafe, #eff6ff)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "Arial, sans-serif",
  },

  card: {
    width: "100%",
    maxWidth: "950px",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "40px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  },

  startCard: {
    width: "100%",
    maxWidth: "700px",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "50px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  },

  header: {
    textAlign: "center",
    marginBottom: "35px",
  },

  title: {
    fontSize: "52px",
    fontWeight: "bold",
    marginBottom: "15px",
    color: "#111827",
  },

  startDescription: {
    fontSize: "20px",
    lineHeight: "1.8",
    color: "#4b5563",
    marginTop: "20px",
    marginBottom: "30px",
  },

  infoBox: {
    backgroundColor: "#f3f4f6",
    borderRadius: "16px",
    padding: "20px",
    marginBottom: "30px",
    fontSize: "18px",
    lineHeight: "2",
  },

  startButton: {
    padding: "18px 40px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "16px",
    fontSize: "22px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  timerBox: {
    display: "inline-block",
    backgroundColor: "#eff6ff",
    color: "#2563eb",
    padding: "10px 20px",
    borderRadius: "999px",
    fontWeight: "bold",
    fontSize: "20px",
    marginBottom: "12px",
  },

  questionNumber: {
    fontSize: "18px",
    color: "#6b7280",
  },

  questionBox: {
    marginBottom: "35px",
  },

  questionText: {
    fontSize: "32px",
    lineHeight: "1.5",
    textAlign: "center",
    color: "#111827",
    marginBottom: "35px",
  },

  optionsContainer: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "16px",
  },

  optionButton: {
    padding: "18px",
    borderRadius: "16px",
    border: "2px solid #dbeafe",
    fontSize: "18px",
    fontWeight: "500",
    transition: "0.2s",
    cursor: "pointer",
  },

  nextButton: {
    width: "100%",
    padding: "18px",
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    borderRadius: "16px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  resultCard: {
    width: "100%",
    maxWidth: "650px",
    backgroundColor: "#ffffff",
    borderRadius: "24px",
    padding: "40px",
    textAlign: "center",
    boxShadow: "0 15px 40px rgba(0,0,0,0.1)",
  },

  resultTitle: {
    fontSize: "42px",
    marginBottom: "25px",
  },

  scoreCircle: {
    width: "180px",
    height: "180px",
    borderRadius: "50%",
    backgroundColor: "#2563eb",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto 25px auto",
  },

  scoreText: {
    color: "#ffffff",
    fontSize: "48px",
    fontWeight: "bold",
  },

  resultStatus: {
    fontSize: "28px",
    marginBottom: "10px",
    color: "#111827",
  },

  resultDetail: {
    fontSize: "18px",
    color: "#6b7280",
    marginBottom: "30px",
  },

  gradingBox: {
    backgroundColor: "#f9fafb",
    padding: "20px",
    borderRadius: "16px",
    textAlign: "left",
    lineHeight: "1.8",
  },
};
