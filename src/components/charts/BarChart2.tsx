// @ts-nocheck
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Button, Modal } from "@mui/material";
import { useState, useRef } from "react";
import { Close } from "@mui/icons-material";
import zoomPlugin from "chartjs-plugin-zoom";

// ✅ Register Plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels, zoomPlugin);

const fullLabels = [
  "CannaPaw™ Pain Relief Therapy Oil",
  "Cocotail™ - Healthy Drink",
  "Ghadi Machine Wash Detergent Powder - 1 kg (Lavender)",
  "Ghadi Detergent Powder",
  "Xpert Dishwash Bar",
  "Dairy Milk",
  "Product 7 Product 7 Product 7 Product 7 Product 7 Product 7 Product 7",
  "Product 8 Product 8 Product 8 Product 8 Product 8 Product 8 Product 8",
  "Product 9 Product 9 Product 9 Product 9 Product 9 Product 9",
  "Product 10 Product 10 Product 10 Product 10 Product 10",
  "Product 11 Product 11 Product 11 Product 11",
  "Product 12 Product 12 Product 12 Product 12",
  "Product 13 Product 13 Product 13 Product 13",
  "Product 14 Product 14 Product 14",
  "Product 15 Product 15 ",
  "Product 16 Product 16 ",
];

const dataValues = [25000, 12000, 8000, 7000, 5000, 6000, 4000, 3000, 2000, 1700, 2500, 1400, 17000, 2200, 1500, 1250];

const data = {
  labels: fullLabels,
  datasets: [
    {
      label: "Total Revenue ₹",
      data: dataValues,
      backgroundColor: "#00c3f1",
    },
  ],
};


const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    legend: { display: false },
    title: {
      display: false,
      text: "Zoomable Revenue Chart",
    },
    datalabels: {
      color: "#000",
      anchor: "start",
      align: "end",
      formatter: (value, context) => {
        const label = fullLabels[context.dataIndex];
          return label;
      },
    },
    tooltip: {
      callbacks: {
        title: (tooltipItems) => fullLabels[tooltipItems[0].dataIndex],
      },
    },
    zoom: {
      pan: {
        enabled: true,
        mode: "y",
      },
      zoom: {
        wheel: { enabled: true },
        pinch: { enabled: true },
        mode: "y",
      },
    },
  },
  scales: {
    x: {
      beginAtZero: true,
      ticks: {
        callback: (value) => `₹ ${value.toLocaleString()}`,
      },
    },
    y: {
      ticks: { display: false },
      grid: { display: false },
    },
  },
};
export default function BarChart2() {
  const chartRef = useRef(null);
  const [open, setOpen] = useState(false);
  const rowHeight = 40;
  const chartHeight = Math.max(fullLabels.length * rowHeight, 400);
  
  return (
    <Box sx={{ height:'400px', overflowY: 'scroll'}}>
      <Button variant="outlined"  onClick={() => chartRef.current?.resetZoom()}>Reset Zoom</Button>
       {fullLabels.length > 10 && (
        <Button variant="outlined" sx={{ mt: 2 , float:'right'}} onClick={() => setOpen(true)}>
        View Full Chart
      </Button>
      )}
    {/* Button to Open Modal */}
    {/* Small Chart */}
    <Box sx={{ height: `${chartHeight}px` }}>
      <Bar ref={chartRef} data={data} options={options} />
    </Box>

    {/* Button to Open Modal */}
  

    {/* Modal with Full Chart */}
    <Modal open={open} onClose={() => setOpen(false)}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "white",
          boxShadow: 24,
          p: 3,
          width: "90vw",
          height: "90vh",
        }}
      >
        <Bar data={data} options={{ ...options, maintainAspectRatio: false }} />
        <Box
          sx={{position: "absolute", top: 20, right: 20, color:'red', cursor:'pointer'}}
          onClick={() => setOpen(false)}
        >
          <Close/>
        </Box>
      </Box>
    </Modal>
  </Box>
    
  );
}
