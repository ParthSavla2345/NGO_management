import React from 'react';
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
import About from './components/About';
import Contact from './components/Contact';

const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { user } = React.useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" />;
  }
  if (adminOnly && user.role !== 1) {
    return <Navigate to="/dashboard" />;
  }
  return children;
};

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
};

const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout><Home /></Layout>} />
          <Route path="/about" element={<Layout><About /></Layout>} />
          <Route path="/contact" element={<Layout><Contact /></Layout>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/dashboard"
            element={
              <Layout>
                <ProtectedRoute>
                  <UserDashboard />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/admin-dashboard"
            element={
              <Layout>
                <ProtectedRoute adminOnly>
                  <Dashboard />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/volunteers"
            element={
              <Layout>
                <ProtectedRoute>
                  <VolunteerList />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/volunteer/add"
            element={
              <Layout>
                <ProtectedRoute adminOnly>
                  <VolunteerForm />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/volunteer-staff"
            element={
              <Layout>
                <ProtectedRoute>
                  <VolunteerStaffList />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/volunteer-staff/add"
            element={
              <Layout>
                <ProtectedRoute adminOnly>
                  <VolunteerStaffForm />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/volunteer-staff/edit/:id"
            element={
              <Layout>
                <ProtectedRoute adminOnly>
                  <VolunteerStaffForm />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/donations"
            element={
              <Layout>
                <ProtectedRoute>
                  <DonationList />
                </ProtectedRoute>
              </Layout>
            }
          />
          <Route
            path="/donors"
            element={
              <Layout>
                <ProtectedRoute>
                  <DonorList />
                </ProtectedRoute>
              </Layout>
            }
          />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;