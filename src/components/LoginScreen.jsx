export default function LoginScreen({
  passwordInput,
  setPasswordInput,
  passwordError,
  handlePasswordLogin,
  styles,
}) {
  return (
    <div style={styles.page}>
      <div style={styles.startCard}>
        <h1 style={styles.title}>Login Test Admin</h1>

        <p style={styles.startDescription}>
          Masukkan password untuk memulai test
        </p>

        <input
          type="password"
          placeholder="Masukkan password"
          value={passwordInput}
          onChange={(e) => setPasswordInput(e.target.value)}
          style={{
            width: "100%",
            padding: "16px",
            borderRadius: "12px",
            border: "2px solid #dbeafe",
            fontSize: "18px",
            marginBottom: "20px",
            boxSizing: "border-box",
          }}
        />

        {passwordError && (
          <p
            style={{
              color: "#dc2626",
              marginBottom: "20px",
              fontWeight: "bold",
            }}
          >
            {passwordError}
          </p>
        )}

        <button style={styles.startButton} onClick={handlePasswordLogin}>
          Masuk
        </button>
      </div>
    </div>
  );
}
