import { useEffect, useState } from "react";
import { getTotalPendapatan, getTotalPengeluaran } from "./utils/penghasilan";
import { Bar } from "react-chartjs-2";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";

Chart.register(CategoryScale);

function App() {
  const [pendapatanData, setPendapatanData] = useState("");
  const [pengeluaranData, setPengeluaranData] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const pendapatan = await getTotalPendapatan();
    const pengeluaran = await getTotalPengeluaran();
    setPendapatanData(pendapatan.pendapatan);
    setPengeluaranData(pengeluaran.pengeluaran);
  };

  const data = {
    labels: ["Penghasilan"],
    datasets: [
      {
        label: "Pendapatan",
        data: [pendapatanData],
        backgroundColor: ["blue"],
      },
      {
        label: "Pengeluaran",
        data: [pengeluaranData],
        backgroundColor: ["red"],
      },
    ],
  };

  return (
    <>
      <div>
        <h2 style={{textAlign: "center"}}> Test Coding Faisal Baqir Tahmidi di PT Egogo Hub Indonesia</h2>
        <Bar data={data} />
      </div>
    </>
  );
}

export default App;
