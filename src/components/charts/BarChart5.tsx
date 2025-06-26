// @ts-nocheck

import { useState, useRef, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
import zoomPlugin from "chartjs-plugin-zoom";
import { Box } from "@mui/material";

// Register plugins
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ChartDataLabels, zoomPlugin);

const fullLabels = [
  "Product 1 Product 1", "Cocotail™", "Ghadi Detergent", "Xpert Dishwash", "Dairy Milk",
  "Product 6", "Product 7", "Product 8", "Product 9", "Product 10",
  "Product 11", "Product 12", "Product 13", "Product 14", "Product 15",
  "Product 16", "Product 17", "Product 18", "Product 19", "Product 20",
  "Product 21", "Product 22", "Product 23", "Product 24", "Product 25",
];

const dataValues = [
  25000, 12000, 8000, 7000, 6000,
  5500, 5200, 5100, 5000, 4900,
  4800, 4700, 4600, 4500, 4400,
  4300, 4200, 4100, 4000, 3900,
  3800, 3700, 3600, 3500, 3400,
];

const ITEMS_PER_PAGE = 10;

export default function BarChart5() {
  const scrollRef = useRef(null);
  const chartRef = useRef(null);
  const [page, setPage] = useState(0);

  const visibleLabels = fullLabels.slice(0, (page + 1) * ITEMS_PER_PAGE);
  const visibleValues = dataValues.slice(0, (page + 1) * ITEMS_PER_PAGE);

  // ✅ Move data inside the component so it updates on page change
  const data = {
    labels: visibleLabels,
    datasets: [
      {
        label: "Total Revenue ₹",
        data: visibleValues,
        backgroundColor: "red",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: "y",
    scales: {
      y: {
        type: "category",
        ticks: { display: false },
        grid: { display: false },
      },
      x: {
        ticks: { display: true },
      },
    },
    plugins: {
      legend: { display: true },
      datalabels: {
        color: "#000",
        anchor: "start",
        align: "end",
        offset: 4,
        clip: true,
        formatter: (_, context) => visibleLabels[context.dataIndex],
      },
      tooltip: {
        callbacks: {
          title: (tooltipItems) => visibleLabels[tooltipItems[0].dataIndex],
        },
      },
      zoom: {
        pan: { enabled: true, mode: "y" },
        zoom: {
          wheel: { enabled: false }, // ❌ disables scroll zoom to allow normal scroll
          pinch: { enabled: false },
          mode: "y",
        },
      },
    },
  };

  // ✅ Scroll event to load next page
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => {
      const atBottom = el.scrollTop + el.clientHeight >= el.scrollHeight - 5;
      const hasMore = (page + 1) * ITEMS_PER_PAGE < fullLabels.length;

      if (atBottom && hasMore) {
        setPage((prev) => prev + 1);
      }
    };

    el.addEventListener("scroll", onScroll);
    return () => el.removeEventListener("scroll", onScroll);
  }, [page]);

  return (
    <Box
      ref={scrollRef}
      sx={{
        height: "500px",
        overflowY: "auto",
        WebkitOverflowScrolling: "touch",
        touchAction: "pan-y",
        px: 2,
        pb: 2,
      }}
    >
      <Bar ref={chartRef} data={data} options={options} />
    </Box>
  );
}
