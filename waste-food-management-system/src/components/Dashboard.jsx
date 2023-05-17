import React, { useEffect, useState } from 'react';
import {Chart} from 'chart.js';
import axios from 'axios';

function Dashboard() {
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('/api/data'); // Replace with your API endpoint for fetching data
      const data = response.data; // Assuming the response contains an array of data objects
      setChartData(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    createChart();
  }, [chartData]);

  const createChart = () => {
    const chartCanvas = document.getElementById('chartCanvas');
    new Chart(chartCanvas, {
      type: 'bar',
      data: {
        labels: chartData.map(item => item.label),
        datasets: [
          {
            label: 'Donations',
            data: chartData.map(item => item.donations),
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
          },
          // Add additional datasets for food requests, industry purchases, etc.
        ],
      },
      options: {
        // Configure chart options as needed
      },
    });
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <canvas id="chartCanvas"></canvas>
    </div>
  );
}

export default Dashboard;