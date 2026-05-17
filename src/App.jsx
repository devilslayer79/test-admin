import { Routes, Route } from "react-router-dom";

import QuizPage from "./pages/QuizPage";
import AdminDashboard from "./pages/AdminDashboard";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<QuizPage />} />

      <Route
        path="/admin"
        element={<AdminDashboard />}
      />
    </Routes>
  );
}