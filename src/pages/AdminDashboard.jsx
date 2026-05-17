import { useEffect, useState } from "react";

import { supabase } from "../lib/supabase";

export default function AdminDashboard() {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    const { data, error } = await supabase
      .from("quiz_results")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      console.error(error);
    } else {
      setResults(data);
    }

    setLoading(false);
  };

  if (loading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dashboard Admin</h1>

      <table
        border="1"
        cellPadding="10"
        style={{
          borderCollapse: "collapse",
          width: "100%",
        }}
      >
        <thead>
          <tr>
            <th>Nama</th>
            <th>Score</th>
            <th>Persentase</th>
            <th>Durasi</th>
            <th>Tanggal</th>
          </tr>
        </thead>

        <tbody>
          {results.map((item) => (
            <tr key={item.id}>
              <td>{item.participant_name}</td>
              <td>{item.score}</td>
              <td>{item.percentage}%</td>
              <td>{item.duration} detik</td>

              <td>
                {new Date(
                  item.created_at
                ).toLocaleString("id-ID", {
                  timeZone: "Asia/Jayapura",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}