export const formatTime = (seconds) => {
  const minutes = Math.floor(seconds / 60);

  const remainingSeconds = seconds % 60;

  return `${minutes}:${remainingSeconds
    .toString()
    .padStart(2, "0")}`;
};

export const getResult = (percentage) => {
  if (percentage >= 96) return "Sangat Baik";

  if (percentage >= 80) return "Baik";

  if (percentage >= 65) return "Cukup";

  if (percentage >= 50) return "Kurang";

  return "Perlu Belajar";
};