import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Users, DollarSign, Calendar, Clock, Award, CheckCircle, FileText } from 'lucide-react';
import { AuthContext } from '../../contexts/AuthContext';
import VolunteerForm from '../volunteers/VolunteerForm';

const UserDashboard = () => {
  const { user } = useContext(AuthContext);
  const [mounted, setMounted] = useState(false);
  const [stats, setStats] = useState({
    volunteers: 10,
    donations: 500,
    events: 5,
    hours: 150,
  });
  const [recentActivity, setRecentActivity] = useState([
    { action: 'New volunteer joined', date: 'Jul 25, 2025', user: 'John Doe' },
    { action: 'Donation received', date: 'Jul 24, 2025', amount: '$100' },
  ]);

  useEffect(() => {
    setMounted(true);
    // Simulate API call for stats and activity (replace with real data)
    // fetch('/api/stats').then(res => res.json()).then(data => setStats(data));
    // fetch('/api/activity').then(res => res.json()).then(data => setRecentActivity(data));
  }, []);

  const styles = {
    container: {
      minHeight: '100vh',
      background: 'linear-gradient(to bottom right, #166534, #1e40af, #166534)',
      padding: '2rem 1rem',
    },
    card: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '8px',
      padding: '1.5rem',
    },
    header: {
      textAlign: 'center',
      marginBottom: '2rem',
    },
    title: {
      fontSize: '2rem',
      fontWeight: 'bold',
      color: 'white',
      marginBottom: '0.5rem',
    },
    subtitle: {
      fontSize: '1rem',
      color: '#d1d5db',
    },
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '1.5rem',
      marginBottom: '2rem',
    },
    statCard: {
      textAlign: 'center',
      padding: '1rem',
    },
    statValue: {
      fontSize: '1.5rem',
      fontWeight: '600',
      color: 'white',
    },
    statLabel: {
      fontSize: '0.875rem',
      color: '#d1d5db',
    },
    icon: {
      width: '24px',
      height: '24px',
      color: '#34d399',
      marginBottom: '0.5rem',
    },
    formSection: {
      marginTop: '1.5rem',
      padding: '1rem',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      borderRadius: '0.375rem',
    },
    link: {
      display: 'inline-block',
      backgroundColor: '#34d399',
      color: 'white',
      padding: '0.75rem 1rem',
      borderRadius: '0.375rem',
      fontSize: '1rem',
      fontWeight: '500',
      textDecoration: 'none',
      margin: '0.5rem',
      transition: 'background-color 0.15s ease-in-out',
    },
    achievement: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderRadius: '0.375rem',
      backgroundColor: 'rgba(52, 211, 153, 0.2)',
      marginBottom: '0.5rem',
    },
    activityItem: {
      display: 'flex',
      alignItems: 'center',
      padding: '0.5rem',
      borderLeft: '2px solid #34d399',
      marginBottom: '0.5rem',
    },
  };

  if (!mounted) {
    return <div style={{ ...styles.container, textAlign: 'center', color: 'white' }}>Loading...</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>Welcome, {user?.name || 'User'}!</h1>
        <p style={styles.subtitle}>Make a difference in your community</p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.div style={styles.grid} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
          <motion.div style={styles.statCard} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6 }}>
            <Users style={styles.icon} />
            <div style={styles.statValue}>{stats.volunteers}</div>
            <div style={styles.statLabel}>Volunteers</div>
          </motion.div>
          <motion.div style={styles.statCard} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <DollarSign style={styles.icon} />
            <div style={styles.statValue}>${stats.donations}</div>
            <div style={styles.statLabel}>Total Donations</div>
          </motion.div>
          <motion.div style={styles.statCard} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <Calendar style={styles.icon} />
            <div style={styles.statValue}>{stats.events}</div>
            <div style={styles.statLabel}>Events</div>
          </motion.div>
          <motion.div style={styles.statCard} initial={{ y: 20 }} animate={{ y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
            <Clock style={styles.icon} />
            <div style={styles.statValue}>{stats.hours} hrs</div>
            <div style={styles.statLabel}>Volunteer Hours</div>
          </motion.div>
        </motion.div>

        {/* Volunteer Form for non-admin users */}
        {user?.role !== 'admin' && (
          <motion.div style={styles.formSection} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Apply to Volunteer</h3>
            <VolunteerForm />
          </motion.div>
        )}

        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '1.5rem' }}>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.5 }}>
            <div style={styles.card}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Staff Management</h3>
              <Link
                to="/volunteer-staff"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#34d399')}
              >
                Volunteers
              </Link>
              <Link
                to="/staff-members"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#34d399')}
              >
                Staff Members
              </Link>
              <Link
                to="/donors"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#34d399')}
              >
                View Donors
              </Link>
              <Link
                to="/events"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#34d399')}
              >
                View Events
              </Link>
              <Link
                to="/profile"
                style={styles.link}
                onMouseEnter={(e) => (e.target.style.backgroundColor = '#059669')}
                onMouseLeave={(e) => (e.target.style.backgroundColor = '#34d399')}
              >
                Manage Profile
              </Link>
            </div>
          </motion.div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.6 }}>
              <div style={styles.card}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Achievements</h3>
                <div style={styles.achievement}>
                  <Award style={{ width: '20px', height: '20px', color: '#34d399', marginRight: '0.5rem' }} />
                  <span style={{ color: 'white' }}>100 Volunteer Hours</span>
                </div>
                <div style={styles.achievement}>
                  <CheckCircle style={{ width: '20px', height: '20px', color: '#34d399', marginRight: '0.5rem' }} />
                  <span style={{ color: 'white' }}>First Donation</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.7 }}>
              <div style={styles.card}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white', marginBottom: '1rem' }}>Recent Activity</h3>
                {recentActivity.map((activity, index) => (
                  <div key={index} style={styles.activityItem}>
                    <div style={{ width: '4px', height: '4px', backgroundColor: '#34d399', borderRadius: '50%', marginRight: '0.5rem' }} />
                    <span style={{ color: 'white', fontSize: '0.875rem' }}>
                      {activity.action} by {activity.user || 'N/A'} - {activity.date} {activity.amount && `(${activity.amount})`}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;