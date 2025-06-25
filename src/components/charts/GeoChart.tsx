// @ts-nocheck

import React, { useEffect, useState } from "react";
import { ChoroplethController, ProjectionScale, ColorScale } from "chartjs-chart-geo";
import { Chart as ChartJS, Tooltip, Legend } from "chart.js";
import { Chart } from "react-chartjs-2";

ChartJS.register(ChoroplethController, ProjectionScale, ColorScale, Tooltip, Legend);


export default function GeoChart() {
    const [geoJson, setGeoJson] = useState<any>(null);

    useEffect(() => {
      fetch("https://unpkg.com/world-atlas/countries-50m.json")
        .then((response) => response.json())
        .then((data) => setGeoJson(ChartGeo.topojson.feature(data, data.objects.countries)));
    }, []);
  
    if (!geoJson) return <p>Loading...</p>;
  
    const data = {
      labels: geoJson.features.map((d: any) => d.properties.name),
      datasets: [
        {
          label: "Countries",
          data: geoJson.features.map((feature: any) => ({
            feature,
            value: Math.random() * 100,
          })),
        },
      ],
    };
  
    const options = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        projection: {
          axis: "x",
          projection: "equalEarth",
        },
      },
    };
  return (
    <Chart type="choropleth" data={data} options={options} />
  )
}




