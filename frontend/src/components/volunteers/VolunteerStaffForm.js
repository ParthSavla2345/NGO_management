import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const VolunteerStaffForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'volunteer',
    phone: '',
    availability: '',
    status: 'active',
  });
  const [error, setError] = useState('');

  useEffect(() => {
    if (id) {
      const fetchVolunteer = async () => {
        try {
          const response = await api.get(`/volunteers/${id}`);
          setFormData(response.data);
        } catch (err) {
          console.error('Fetch volunteer error:', err.response?.data || err.message);
          setError('Failed to load volunteer data');
        }
      };
      fetchVolunteer();
    }
  }, [id]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (id) {
        await api.put(`/volunteers/${id}`, formData);
      } else {
        await api.post('/volunteers', formData);
      }
      navigate('/volunteer-staff');
    } catch (err) {
      console.error('Submit volunteer error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Failed to save volunteer');
    }
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      minHeight: 'calc(100vh - 64px)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formContainer: {
      width: '100%',
      maxWidth: '480px',
      padding: '2rem',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)',
      backgroundColor: 'white',
    },
    title: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      marginBottom: '1.5rem',
      textAlign: 'center',
      color: '#1e293b',
    },
    error: {
      color: '#ef4444',
      backgroundColor: '#fee2e2',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      marginBottom: '1rem',
      fontSize: '0.875rem',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '500',
      color: '#374151',
    },
    input: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      transition: 'border-color 0.15s ease-in-out',
      outline: 'none',
    },
    select: {
      width: '100%',
      padding: '0.75rem',
      borderRadius: '0.375rem',
      border: '1px solid #d1d5db',
      fontSize: '1rem',
      backgroundColor: 'white',
    },
    button: {
      backgroundColor: '#1d4ed8',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      width: '100%',
      cursor: 'pointer',
      border: 'none',
      transition: 'background-color 0.15s ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>{id ? 'Edit Volunteer/Staff' : 'Add Volunteer/Staff'}</h2>
        {error && <p style={styles.error}>{error}</p>}
        <form onSubmit={handleSubmit}>
          <div style={styles.formGroup}>
            <label style={styles.label}>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
              required
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="volunteer">Volunteer</option>
              <option value="staff">Staff</option>
            </select>
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Availability</label>
            <input
              type="text"
              name="availability"
              value={formData.availability}
              onChange={handleChange}
              style={styles.input}
              onFocus={(e) => {
                e.target.style.borderColor = '#3b82f6';
                e.target.style.boxShadow = '0 0 0 3px rgba(59, 130, 246, 0.25)';
              }}
              onBlur={(e) => {
                e.target.style.borderColor = '#d1d5db';
                e.target.style.boxShadow = 'none';
              }}
            />
          </div>
          <div style={styles.formGroup}>
            <label style={styles.label}>Status</label>
            <select
              name="status"
              value={formData.status}
              onChange={handleChange}
              style={styles.select}
            >
              <option value="active">Active</option>
              <option value="inactive">Inactive</option>
            </select>
          </div>
          <button
            type="submit"
            style={styles.button}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
          >
            {id ? 'Update' : 'Add'} Volunteer/Staff
          </button>
        </form>
      </div>
    </div>
  );
};

export default VolunteerStaffForm;