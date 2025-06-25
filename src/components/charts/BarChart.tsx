// @ts-nocheck
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box, Button, Modal } from "@mui/material";
import { useState } from "react";
import { Close } from "@mui/icons-material";

// ✅ Register Plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels);

const fullLabels = [
  "CannaPaw™ Pain Relief Therapy Oil",
  "Cocotail™ - Healthy Drink",
  "Ghadi Machine Wash Detergent Powder - 1 kg (Lavender)",
  "Ghadi Detergent Powder",
  "Xpert Dishwash Bar",
  "Dairy Milk",
  "Product 7 Product 7 Product 7 Product 7 Product 7 Product 7 Product 7",
  "Product 8 Product 8 Product 8 Product 8 Product 8 Product 8 Product 8",
 
];

const dataValues = [25000, 12000, 8000, 7000, 5000, 6000, 4000, 3000, ];

const data = {
  labels: fullLabels,
  datasets: [
    {
      label: "Total Revenue ₹",
      data: dataValues,
      backgroundColor: "#ff9800",
    },
  ],
};


const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y", // Horizontal bar chart
  borderRadius: 5,
  plugins: {
    legend: {
      display: true,
      position: "top" as const,
    },
    title: {
      display: true,
      text: "Revenue By SKU",
      font: {
        size: 18,
      },
    },
    datalabels: {
      color: "#000", // White text inside the bar
      font: {
        weight: "400",
        size: 12,
      },
      textAlign: 'start',
      anchor: 'start',// Position at the end of the bar
      align: 'end', // Align inside the bar
      offset: 10,
      // formatter: (value) => `₹ ${value.toLocaleString()}`,
      // formatter: (_, context) => context.chart.data.labels[context.dataIndex], //  Show product name instead of value
      formatter: (_, context) => {
        const label = fullLabels[context.dataIndex];
        return label;
      },
      clip: false, // Ensures labels are not cut off
    },
  },
  scales: {
    x: {
      ticks: {
        callback: (value) => `₹ ${value.toLocaleString()}`,
      },
      grid: {
        display: false
      }
    },
    y: {
      display: true,
      beginAtZero: true,
      ticks: {
        display: false,
      },
      grid: {
        display: false,
      },
    },
  },
};

export default function BarChart() {
  
  const [open, setOpen] = useState(false);
  const rowHeight = 40;
  const chartHeight = Math.max(fullLabels.length * rowHeight, 400);
  
  return (
    <Box sx={{ height:'400px', overflowY: 'auto'}}>
       {fullLabels.length > 100 && (
        <Button variant="outlined" sx={{ mt: 2 , float:'right'}} onClick={() => setOpen(true)}>
        View Full Chart
      </Button>
      )}
    {/* Button to Open Modal */}
    {/* Small Chart */}
    <Box sx={{ height: `${chartHeight}px` }}>
      <Bar data={data} options={options} />
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
