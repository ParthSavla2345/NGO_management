import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import '../styles.css';

const Sidebar = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="sidebar">
      <h2>Menu</h2>
      <ul>
        <li>
          <Link to={user?.role === 1 ? "/admin-dashboard" : "/dashboard"} className="sidebar-link">
            {user?.role === 1 ? "Admin Dashboard" : "Dashboard"}
          </Link>
        </li>
        <li>
          <Link to="/volunteers" className="sidebar-link">Volunteers</Link>
        </li>
        {user?.role === 1 && (
          <li>
            <Link to="/volunteer-staff" className="sidebar-link">Volunteer Staff</Link>
          </li>
        )}
        {user?.role === 1 && (
          <li>
            <Link to="/donations" className="sidebar-link">Donations</Link>
          </li>
        )}
        <li>
          <Link to="/donors" className="sidebar-link">Donors</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;