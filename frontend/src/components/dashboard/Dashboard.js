import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';

const Dashboard = () => {
  const [stats, setStats] = useState({ volunteers: 0, staff: 0 });
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await api.get('/volunteers');
        const volunteers = response.data.filter(v => v.role === 'volunteer').length;
        const staff = response.data.filter(v => v.role === 'staff').length;
        setStats({ volunteers, staff });
      } catch (err) {
        console.error('Fetch stats error:', err.response?.data || err.message);
        setError('Failed to load statistics');
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Volunteers & Staff</h3>
          <p>Total Volunteers: {stats.volunteers}</p>
          <p>Total Staff: {stats.staff}</p>
          <Link to="/volunteer-staff" className="text-blue-600 hover:underline">Manage Volunteers & Staff</Link>
        </div>
        <div className="bg-white p-4 rounded shadow">
          <h3 className="text-lg font-semibold">Other Actions</h3>
          <Link to="/volunteers" className="text-blue-600 hover:underline block">Manage Volunteers</Link>
          <Link to="/donors" className="text-blue-600 hover:underline block">View Donors</Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;