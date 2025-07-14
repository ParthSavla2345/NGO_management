import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);

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
    card: {
      width: '100%',
      maxWidth: '600px',
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
    text: {
      fontSize: '1rem',
      color: '#374151',
      marginBottom: '1rem',
      textAlign: 'center',
    },
    link: {
      display: 'inline-block',
      backgroundColor: '#1d4ed8',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      margin: '0.5rem',
      transition: 'background-color 0.15s ease-in-out',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.title}>Welcome, {user?.name}!</h2>
        <p style={styles.text}>This is your user dashboard. Explore volunteer opportunities and donor information.</p>
        <div>
          <Link
            to="/volunteer-staff"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
          >
            View Volunteers & Staff
          </Link>
          <Link
            to="/donors"
            style={styles.link}
            onMouseEnter={(e) => (e.target.style.backgroundColor = '#1e40af')}
            onMouseLeave={(e) => (e.target.style.backgroundColor = '#1d4ed8')}
          >
            View Donors
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;