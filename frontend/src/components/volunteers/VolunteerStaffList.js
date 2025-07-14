import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import api from '../../services/api';

const VolunteerStaffList = () => {
  const { user } = useContext(AuthContext);
  const [volunteers, setVolunteers] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchVolunteers = async () => {
      try {
        const response = await api.get('/volunteers');
        setVolunteers(response.data);
      } catch (err) {
        console.error('Fetch volunteers error:', err.response?.data || err.message);
        setError('Failed to load volunteers');
      }
    };
    fetchVolunteers();
  }, []);

  const handleDelete = async (id) => {
    if (!window.confirm('Are you sure you want to delete this volunteer/staff?')) return;
    try {
      await api.delete(`/volunteers/${id}`);
      setVolunteers(volunteers.filter((v) => v._id !== id));
    } catch (err) {
      console.error('Delete volunteer error:', err.response?.data || err.message);
      setError('Failed to delete volunteer');
    }
  };

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '2rem 1rem',
      minHeight: 'calc(100vh - 64px)',
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
    table: {
      width: '100%',
      borderCollapse: 'collapse',
      backgroundColor: 'white',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      borderRadius: '8px',
      overflow: 'hidden',
    },
    th: {
      padding: '0.75rem',
      backgroundColor: '#1d4ed8',
      color: 'white',
      fontWeight: '500',
      textAlign: 'left',
    },
    td: {
      padding: '0.75rem',
      borderTop: '1px solid #d1d5db',
    },
    button: {
      backgroundColor: '#1d4ed8',
      color: 'white',
      padding: '0.5rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '0.875rem',
      cursor: 'pointer',
      border: 'none',
      marginRight: '0.5rem',
      transition: 'background-color 0.15s ease-in-out',
    },
    deleteButton: {
      backgroundColor: '#ef4444',
    },
    link: {
      color: '#1d4ed8',
      textDecoration: 'none',
      fontWeight: '500',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Volunteers & Staff</h2>
      {error && <p style={styles.error}>{error}</p>}
      {user && user.role === 1 && (
        <Link
          to="/volunteer-staff/add"
          style={{ ...styles.button, display: 'inline-block', marginBottom: '1rem' }}
          onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
          onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
        >
          Add Volunteer/Staff
        </Link>
      )}
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Role</th>
            <th style={styles.th}>Status</th>
            {user && user.role === 1 && <th style={styles.th}>Actions</th>}
          </tr>
        </thead>
        <tbody>
          {volunteers.map((volunteer) => (
            <tr key={volunteer._id}>
              <td style={styles.td}>{volunteer.name}</td>
              <td style={styles.td}>{volunteer.email}</td>
              <td style={styles.td}>{volunteer.role}</td>
              <td style={styles.td}>{volunteer.status}</td>
              {user && user.role === 1 && (
                <td style={styles.td}>
                  <Link
                    to={`/volunteer-staff/edit/${volunteer._id}`}
                    style={{ ...styles.button }}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
                  >
                    Edit
                  </Link>
                  <button
                    style={{ ...styles.button, ...styles.deleteButton }}
                    onClick={() => handleDelete(volunteer._id)}
                    onMouseEnter={(e) => (e.target.style.backgroundColor = '#dc2626')}
                    onMouseLeave={(e) => (e.target.style.backgroundColor = '#ef4444')}
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default VolunteerStaffList;