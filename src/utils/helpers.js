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

export function shuffleArray(array) {
  const newArray = [...array];

  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [newArray[i], newArray[j]] = [
      newArray[j],
      newArray[i],
    ];
  }

  return newArray;
}