import { useState } from "react";

import styles from "../styles/styles";

export default function AdminLogin({ onSuccess }) {
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");

  const handleLogin = () => {
    if (password === "ADMIN123") {
      setError("");

      onSuccess();
    } else {
      setError("Password salah");
    }
  };

  return (
    <div style={styles.adminLoginContainer}>
      <div style={styles.adminLoginCard}>
        <div style={styles.adminLoginHeader}>
          <div style={styles.adminLoginIcon}>🔒</div>

          <h1 style={styles.adminLoginTitle}>Admin Dashboard</h1>

          <p style={styles.adminLoginSubtitle}>
            Silakan login untuk melanjutkan
          </p>
        </div>

        <div style={styles.adminLoginForm}>
          <input
            type="password"
            placeholder="Masukkan password admin"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handleLogin();
              }
            }}
            style={{
              ...styles.adminLoginInput,

              border: error ? "2px solid #ff4d4f" : "2px solid #e5e7eb",
            }}
          />

          <button onClick={handleLogin} style={styles.adminLoginButton}>
            Masuk Dashboard
          </button>

          {error && <p style={styles.adminLoginError}>{error}</p>}
        </div>
      </div>
    </div>
  );
}
