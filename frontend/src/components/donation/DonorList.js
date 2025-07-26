import React, { useState, useEffect } from 'react';
import * as donationService from '../../services/donation_service';

const DonorList = () => {
  const [donors, setDonors] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonors = async () => {
      try {
        const data = await donationService.getDonors();
        setDonors(data);
      } catch (err) {
        setError('Failed to fetch donors');
      }
    };
    fetchDonors();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Donors</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {donors.map((donor) => (
          <div key={donor._id} className="border p-4 rounded shadow">
            <h3 className="text-lg font-semibold">{donor.name}</h3>
            <p>Email: {donor.email}</p>
            <p>Type: {donor.donationType}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonorList;