const questions = [
    {
      id: 1,
      text: "Kamu pesan Gresh sebanyak 120 karton, namun supplier mengirim 118 karton, dan di nota tertulis 120 karton. Apa tindakan paling tepat?",
      options: [
        "Input sesuai nota",
        "Input sesuai barang yang datang lalu konfirmasi selisih",
        "Input 120 lalu revisi nanti",
        "Tunggu supplier menghubungi terlebih dahulu",
      ],
      answer: 1,
    },
    {
      id: 2,
      text: "Saat input nota, nilai total pada sistem berbeda Rp 1.000 dari nota supplier. Apa tindakan terbaik?",
      options: [
        "Biarkan karena selisih tidak terlalu besar",
        "Cek ulang qty, harga, dan diskon sebelum save",
        "Sesuaikan manual tanpa cek",
        "Input sesuai feeling paling mendekati",
      ],
      answer: 1,
    },
    {
      id: 3,
      text: "Ada dua nota dengan nama produk hampir sama dan nominal mirip. Apa risiko terbesar jika tidak teliti saat penginputan?",
      options: [
        "Supplier rugi",
        "Terjadi double input pembelian",
        "Gudang terima semua barang",
        "Barang menjadi expired",
      ],
      answer: 1,
    },
    {
      id: 4,
      text: "Atasan meminta nota segera diinput, tetapi fisik barang belum dicek gudang. Apa tindakan terbaik?",
      options: [
        "Langsung input agar atasan tidak marah",
        "Input sebagian dulu agar tidak lupa",
        "Tunggu verifikasi fisik oleh gudang sebelum final input",
        "Menyuruh atasan untuk cek fisik di gudang terlebih dahulu",
      ],
      answer: 2,
    },
    {
      id: 5,
      text: "Jika quantity di nota menggunakan satuan pcs, tetapi gudang menghitung dalam satuan karton, apa yang harus dilakukan?",
      options: [
        "Input langsung tanpa konversi",
        "Pastikan konversi satuan benar sebelum input",
        "Gunakan perkiraan",
        "Ikuti satuan yang tertulis di nota",
      ],
      answer: 1,
    },
    {
      id: 6,
      text: "Apa risiko terbesar jika kamu terlalu fokus pada kecepatan input tetapi jarang cek ulang?",
      options: [
        "Kerja cepat selesai",
        "Terdapat kesalahan data",
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
        "Tambahkan quantity tanpa perlu konfirmasi",
      ],
      answer: 2,
    },
    {
      id: 8,
      text: "Saat tekanan kerja tinggi, apa prioritas utama admin pembelian?",
      options: [
        "Selesaikan cepat tanpa cek",
        "Menunggu arahan manajer",
        "Menjaga ketelitian sambil mengatur prioritas",
        "Membantu divisi lain yang sedang kesulitan",
      ],
      answer: 2,
    },
    {
      id: 9,
      text: "Jika supplier menyangkal adanya selisih barang, langkah paling profesional adalah?",
      options: [
        "Memaksa supplier mengaku",
        "Menunjukkan data penerimaan dan nota secara jelas",
        "Menjaga hubungan dengan supplier",
        "Langsung batalkan pemesanan",
      ],
      answer: 1,
    },
    {
      id: 10,
      text: "Apa dampak jika salah input satu digit harga beli barang?",
      options: [
        "Terjadi double input",
        "Bisa mempengaruhi margin",
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
        "Pilih salah satu yang mau diinput",
      ],
      answer: 2,
    },
    {
      id: 12,
      text: "Jika nota supplier sulit dibaca, apa yang paling tepat dilakukan?",
      options: [
        "Menggunakan scan pdf",
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
        "Perusahaan bisa rugi",
        "Supplier menjadi marah",
        "Barang susah keluar",
        "Supplier bisa rugi",
      ],
      answer: 0,
    },
    {
      id: 14,
      text: "Dalam kondisi nota menumpuk, bagaimana cara kerja paling efektif?",
      options: [
        "Kerjakan yang paling mudah",
        "Kerjakan acak agar cepat selesai",
        "Prioritaskan sambil tetap cek detail data",
        "Input semua tanpa cek lalu revisi",
      ],
      answer: 2,
    },
    {
      id: 15,
      text: "Jika ditemukan selisih stok setelah input nota pembelian, apa langkah pertama?",
      options: [
        "Mengubah stok secara manual",
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
        "Agar pekerjaan terlihat rapi",
        "Untuk memastikan data dan barang sesuai",
        "Karena supplier meminta",
        "Agar gudang tidak terlihat nganggur",
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
        "Kurangi qty kerusakan",
      ],
      answer: 2,
    },
    {
      id: 18,
      text: "Saat melakukan input cepat, apa kebiasaan yang paling membantu mengurangi error?",
      options: [
        "Menghafal letak posisi",
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
        "Hapus semua transaksi dan buat baru",
      ],
      answer: 2,
    },
    {
      id: 20,
      text: "Apa ciri admin pembelian yang paling baik dalam pekerjaan sehari-hari?",
      options: [
        "Cepat, rapi, dan konsisten",
        "Teliti, konsisten, dan mampu komunikasi dengan baik",
        "Bertanya saat kebingungan",
        "Mengandalkan hafalan tanpa cek data",
      ],
      answer: 1,
    },
  ];

  export default questions;