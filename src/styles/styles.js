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

  adminLoginContainer: {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    padding: "20px",
  },

  adminLoginCard: {
    width: "100%",
    maxWidth: "400px",
    background: "#fff",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.2)",
  },

  adminLoginHeader: {
    textAlign: "center",
    marginBottom: "30px",
  },

  adminLoginIcon: {
    width: "80px",
    height: "80px",
    borderRadius: "50%",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    margin: "0 auto 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "36px",
    color: "#fff",
  },

  adminLoginTitle: {
    margin: 0,
    fontSize: "28px",
    color: "#222",
  },

  adminLoginSubtitle: {
    color: "#666",
    marginTop: "10px",
  },

  adminLoginForm: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  adminLoginInput: {
    padding: "14px 16px",
    borderRadius: "12px",
    border: "2px solid #e5e7eb",
    outline: "none",
    fontSize: "16px",
  },

  adminLoginButton: {
    padding: "14px",
    border: "none",
    borderRadius: "12px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "bold",
    cursor: "pointer",
  },

  adminLoginError: {
    color: "#ff4d4f",
    margin: 0,
    textAlign: "center",
    fontSize: "14px",
  },

  adminDashboardHeader: {
    marginBottom: "30px",
  },

  adminDashboardSubtitle: {
    fontSize: "16px",
    color: "#475569",
  },

  adminStatsContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
  },

  adminTableHead: {
    backgroundColor: "#0f172a",
  },

  adminTableRow: {
    borderBottom: "1px solid #e2e8f0",
  },

  adminActionButton: {
    backgroundColor: "#2563eb",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },

  adminScoreBadge: {
    backgroundColor: "#dcfce7",
    color: "#166534",
    padding: "6px 12px",
    borderRadius: "999px",
    fontWeight: "600",
    fontSize: "13px",
  },

  adminTableCell: {
    padding: "16px",
    color: "#1e293b",
    fontSize: "14px",
    verticalAlign: "middle",
  },

  adminTableHeaderCell: {
    padding: "16px",
    color: "#ffffff",
    fontSize: "14px",
    fontWeight: "600",
    textAlign: "left",
    borderBottom: "1px solid #334155",
  },

  adminTable: {
    width: "100%",
    borderCollapse: "collapse",
  },

  adminTableWrapper: {
    backgroundColor: "#ffffff",
    borderRadius: "18px",
    overflow: "hidden",
    border: "1px solid #cbd5e1",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },

  adminStatValue: {
    fontSize: "34px",
    fontWeight: "700",
    color: "#0f172a",
  },

  adminStatLabel: {
    fontSize: "14px",
    color: "#64748b",
    marginBottom: "10px",
  },

  adminStatCard: {
    backgroundColor: "#ffffff",
    borderRadius: "16px",
    padding: "24px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    border: "1px solid #e2e8f0",
  },

  adminDashboardTitle: {
    fontSize: "36px",
    fontWeight: "700",
    color: "#0f172a",
    marginBottom: "8px",
  },

  adminDashboardContainer: {
    minHeight: "100vh",
    backgroundColor: "#f1f5f9",
    padding: "30px",
  },

  adminModalOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(15, 23, 42, 0.7)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    zIndex: 999,
  },

  adminModalContent: {
    backgroundColor: "#ffffff",
    width: "100%",
    maxWidth: "900px",
    maxHeight: "90vh",
    overflowY: "auto",
    borderRadius: "20px",
    padding: "30px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  },

  adminCloseButton: {
    backgroundColor: "#ef4444",
    color: "#ffffff",
    border: "none",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },

  adminCloseButton: {
    border: "none",
    background: "#ef4444",
    color: "#fff",
    padding: "10px 16px",
    borderRadius: "10px",
    cursor: "pointer",
  },

  adminAnswerCardCorrect: {
    backgroundColor: "#f0fdf4",
    border: "1px solid #86efac",
    borderLeft: "6px solid #22c55e",
    borderRadius: "14px",
    padding: "18px",
    marginBottom: "16px",
  },

  adminAnswerCardWrong: {
    backgroundColor: "#fef2f2",
    border: "1px solid #fca5a5",
    borderLeft: "6px solid #ef4444",
    borderRadius: "14px",
    padding: "18px",
    marginBottom: "16px",
  },
};

export default styles;
