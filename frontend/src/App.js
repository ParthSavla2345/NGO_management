import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './contexts/AuthContext';
import Navbar from './components/layout/Navbar';
import Home from './components/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import UserDashboard from './components/dashboard/UserDashboard';
import Dashboard from './components/dashboard/Dashboard';
import VolunteerList from './components/volunteers/VolunteerList';
import VolunteerForm from './components/volunteers/VolunteerForm';
import VolunteerStaffList from './components/volunteers/VolunteerStaffList';
import VolunteerStaffForm from './components/volunteers/VolunteerStaffForm';
import DonationList from './components/donation/DonationList';
import DonorList from './components/donation/DonorList';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (adminOnly && user.role !== 1) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<div className="container mx-auto p-4"><h2>About Us</h2></div>} />
          <Route path="/contact" element={<div className="container mx-auto p-4"><h2>Contact</h2></div>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <UserDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <ProtectedRoute adminOnly>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteers"
            element={
              <ProtectedRoute>
                <VolunteerList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer/add"
            element={
              <ProtectedRoute adminOnly>
                <VolunteerForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer-staff"
            element={
              <ProtectedRoute>
                <VolunteerStaffList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer-staff/add"
            element={
              <ProtectedRoute adminOnly>
                <VolunteerStaffForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/volunteer-staff/edit/:id"
            element={
              <ProtectedRoute adminOnly>
                <VolunteerStaffForm />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donations"
            element={
              <ProtectedRoute>
                <DonationList />
              </ProtectedRoute>
            }
          />
          <Route
            path="/donors"
            element={
              <ProtectedRoute>
                <DonorList />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;