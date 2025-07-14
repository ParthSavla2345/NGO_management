import React, { useState, useEffect } from 'react';
import * as donationService from '../../services/donation_service';

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchDonations = async () => {
      try {
        const data = await donationService.getUserDonations();
        setDonations(data);
      } catch (err) {
        setError('Failed to fetch donations');
      }
    };
    fetchDonations();
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Your Donations</h2>
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {donations.map((donation) => (
          <div key={donation._id} className="border p-4 rounded shadow">
            <p>Amount: ${donation.amount}</p>
            <p>Campaign: {donation.campaignId?.title || 'General'}</p>
            <p>Date: {new Date(donation.date).toLocaleDateString()}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DonationList;