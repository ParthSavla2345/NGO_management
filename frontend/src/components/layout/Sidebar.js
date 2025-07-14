import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-4">Menu</h2>
      <ul>
        <li className="mb-2">
          <Link to="/dashboard" className="hover:text-gray-300">Dashboard</Link>
        </li>
        <li className="mb-2">
          <Link to="/volunteers" className="hover:text-gray-300">Volunteers</Link>
        </li>
        <li className="mb-2">
          <Link to="/donations" className="hover:text-gray-300">Donations</Link>
        </li>
        <li className="mb-2">
          <Link to="/donors" className="hover:text-gray-300">Donors</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;