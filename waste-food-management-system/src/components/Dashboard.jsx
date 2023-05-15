import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import axios from 'axios';

function Dashboard() {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    async function fetchDonations() {
      try {
        const response = await axios.get('/api');
        setDonations(response.data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchDonations();
  }, []);

  const data = {
    labels: donations.map(donation => donation.name),
    datasets: [
      {
        label: 'Donations',
        data: donations.map(donation => donation.amount),
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  return (
    <div>
      <h2>Donations</h2>
      <Bar data={data} />
    </div>
  );
}

export default Dashboard;