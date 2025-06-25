// @ts-nocheck

import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Box} from "@mui/material"; 
import { useRef } from "react";
import zoomPlugin from "chartjs-plugin-zoom";

// ✅ Register Plugins dsfsdf
// ✅ Register Plugins dsfsdf
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels, zoomPlugin);

const fullLabels = [
  "Product 1 Product 1 Product 1 Product 1 Product 1 Product 1",
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
];

const dataValues = [25000, 12000, 8000, 7000, 5000, 6000, 4000, 3000, 2000, 1700, 2500, 1400, 17000, 2200];

const data = {
  labels: fullLabels,
  datasets: [
    {
      label: "Total Revenue ₹",
      data: dataValues,
      backgroundColor: "#107287",
    },
  ],
};


const scales = {
  y: {
    type: 'category',
    min: 0,
    max: 9,
    ticks: { display: false },
    grid: { display: false },
  },
  x: {
    ticks: {
      display:true
    }
  },
};

const options = {
  responsive: true,
  maintainAspectRatio: false,
  indexAxis: "y",
  plugins: {
    legend: { display: true },
    title: {
      display: false,
      text: "Zoomable Revenue Chart",
    },
    datalabels: {
      color: "#000",
      anchor: "start",
      align: "end",
      clip:true,
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
        threshold: 8,
      },
      zoom: {
        wheel: { enabled: false },
        pinch: { enabled: true },
        mode: "y",
      },
    },
  },
scales:scales
};
Object.keys(scales).forEach(scale => Object.assign(scales[scale]));


export default function BarChart4() {
  const chartRef = useRef(null);
  const rowHeight = 40;
  // const chartHeight = Math.max(fullLabels.length * rowHeight, 400);
  
  return (
   
     <Box sx={{ height: "500px", overflowY: "auto" }}>
        <Bar ref={chartRef} data={data} options={options} />
      </Box>
  );
}
