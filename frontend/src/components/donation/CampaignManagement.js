import React, { useState, useEffect } from 'react';
import * as donationService from '../../services/donation_service';
import '../../styles.css';

const CampaignManagement = () => {
  const [campaigns, setCampaigns] = useState([]);
  const [formData, setFormData] = useState({ title: '', description: '', goal: '' });
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);

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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    try {
      if (isEditing) {
        await donationService.updateCampaign(editId, formData);
      } else {
        await donationService.createCampaign(formData);
      }
      const data = await donationService.getCampaigns();
      setCampaigns(data);
      setFormData({ title: '', description: '', goal: '' });
      setIsEditing(false);
      setEditId(null);
    } catch (err) {
      setError(err.message || 'Failed to save campaign.');
    }
  };

  const handleEdit = (campaign) => {
    setFormData({
      title: campaign.title,
      description: campaign.description,
      goal: campaign.goal,
    });
    setIsEditing(true);
    setEditId(campaign._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this campaign?')) {
      try {
        await donationService.deleteCampaign(id);
        setCampaigns(campaigns.filter((c) => c._id !== id));
      } catch (err) {
        setError(err.message || 'Failed to delete campaign.');
      }
    }
  };

  return (
    <div className="campaign-management">
      <h3>Manage Campaigns</h3>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit} className="campaign-form">
        <div className="form-group">
          <label>Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label>Goal ($)</label>
          <input
            type="number"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {isEditing ? 'Update Campaign' : 'Create Campaign'}
        </button>
      </form>

      <table className="campaign-table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Goal</th>
            <th>Raised</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {campaigns.map((campaign) => (
            <tr key={campaign._id}>
              <td>{campaign.title}</td>
              <td>${campaign.goal}</td>
              <td>${campaign.raised}</td>
              <td>{campaign.status}</td>
              <td>
                <button
                  className="btn btn-outline"
                  onClick={() => handleEdit(campaign)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-outline"
                  onClick={() => handleDelete(campaign._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CampaignManagement;