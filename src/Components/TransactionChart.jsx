import React from "react";
import { Line } from "react-chartjs-2";
import { Chart, Filler } from "chart.js";

// Register the Filler plugin
Chart.register(Filler);

import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Title,
  Tooltip,
  Legend
);

const TransactionChart = () => {
  // Frontend array data
  const dataPoints = Array.from(
    { length: 12 },
    () => Math.floor(Math.random() * 2000) - 1000
  );

  const chartData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Income vs Expenses",
        data: dataPoints,
        borderColor: "#6b46c1",
        backgroundColor: "rgba(107, 70, 193, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { callbacks: { label: (context) => `$${context.raw}` } },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: { callback: (value) => `$${value}` },
      },
    },
  };

  return (
    <div className="bg-gray-50 p-6 rounded-lg shadow-lg mb-8">
      <h2 className="text-lg font-semibold text-purple-800 mb-4">
        Income vs Expenses Chart
      </h2>
      <Line data={chartData} options={chartOptions} />
    </div>
  );
};

export default TransactionChart;
