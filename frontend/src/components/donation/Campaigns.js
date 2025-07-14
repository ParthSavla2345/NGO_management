import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as donationService from '../../services/donation_service';
import Navbar from '../layout/Navbar';
import '../../styles.css';

const Campaigns = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCampaigns = async () => {
      try {
        const data = await donationService.getCampaigns();
        setCampaigns(data);
      } catch (err) {
        setError(err.message || 'Failed to load campaigns.');
      }
    };
    fetchCampaigns();
  }, []);

  return (
    <div className="campaigns-container">
      <Navbar />
      <div className="campaigns-content">
        <h2>Fundraising Campaigns</h2>
        {error && <div className="error-message">{error}</div>}
        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <div key={campaign._id} className="campaign-card">
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <p>
                Raised: ${campaign.raised} of ${campaign.goal}
              </p>
              <Link to={`/donate?campaign=${campaign._id}`} className="btn btn-primary">
                Contribute
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Campaigns;