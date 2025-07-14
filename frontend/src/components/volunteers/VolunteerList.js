import React, { useState, useEffect } from 'react';
import * as volunteerService from '../../services/volunteer_service';

const VolunteerList = () => {
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const data = await volunteerService.getVolunteers();
        setVolunteers(data);
      } catch (err) {
        setError('Failed to fetch volunteers');
      }
    };
    fetchVolunteers();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Volunteers</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {volunteers.map((volunteer) => (
          <div key={volunteer._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{volunteer.name}</h3>
            <p>Email: {volunteer.email}</p>
            <p>Status: {volunteer.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerList;