import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import * as authService from '../../services/auth_service';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Login payload:', formData);
    try {
      const response = await authService.login(formData);
      console.log('Login response:', response);
      if (response.token && response.user) {
        login(response.token, response.user);
        setSuccess('Login successful! Please wait for further instructions.');
        setError('');
        // Redirect to dashboard after a short delay to show success message
        setTimeout(() => navigate('/dashboard'), 2000);
      } else {
        setError('Invalid response from server');
      }
    } catch (err) {
      console.error('Login error:', err.response?.data || err.message);
      setError(err.response?.data?.message || 'Login failed');
      setSuccess('');
    }
  };

  const styles = {
    pageContainer: {
      minHeight: '100vh',
      backgroundColor: 'white',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem 1rem',
      fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    },
    formContainer: {
      width: '100%',
      maxWidth: '450px',
      backgroundColor: 'white',
      borderRadius: '12px',
      boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      overflow: 'hidden',
    },
    header: {
      background: 'linear-gradient(135deg, #1d4ed8 0%, #0891b2 100%)',
      color: 'white',
      padding: '2rem',
      textAlign: 'center',
    },
    title: {
      fontSize: '1.875rem',
      fontWeight: '700',
      margin: '0 0 0.5rem 0',
      lineHeight: '1.2',
    },
    subtitle: {
      fontSize: '0.95rem',
      opacity: '0.9',
      margin: '0',
      fontWeight: '400',
    },
    formContent: {
      padding: '2rem',
    },
    error: {
      color: '#ef4444',
      backgroundColor: '#fee2e2',
      padding: '0.875rem 1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      border: '1px solid #fecaca',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    success: {
      color: '#22c55e',
      backgroundColor: '#d1fae5',
      padding: '0.875rem 1rem',
      borderRadius: '8px',
      marginBottom: '1.5rem',
      fontSize: '0.875rem',
      border: '1px solid #a7f3d0',
      display: 'flex',
      alignItems: 'center',
      gap: '0.5rem',
    },
    errorIcon: {
      width: '16px',
      height: '16px',
      flexShrink: '0',
    },
    successIcon: {
      width: '16px',
      height: '16px',
      flexShrink: '0',
    },
    formGroup: {
      marginBottom: '1.5rem',
    },
    label: {
      display: 'block',
      marginBottom: '0.5rem',
      fontSize: '0.875rem',
      fontWeight: '600',
      color: '#374151',
      letterSpacing: '0.025em',
    },
    inputWrapper: {
      position: 'relative',
    },
    input: {
      width: '100%',
      padding: '0.875rem 1rem',
      borderRadius: '8px',
      border: '2px solid #e5e7eb',
      fontSize: '1rem',
      transition: 'all 0.3s ease',
      outline: 'none',
      backgroundColor: '#f9fafb',
      boxSizing: 'border-box',
    },
    inputFocus: {
      borderColor: '#1d4ed8',
      backgroundColor: 'white',
      boxShadow: '0 0 0 3px rgba(29, 78, 216, 0.1)',
    },
    button: {
      width: '100%',
      backgroundColor: '#1d4ed8',
      color: 'white',
      padding: '0.875rem 1rem',
      borderRadius: '8px',
      fontSize: '1rem',
      fontWeight: '600',
      cursor: 'pointer',
      border: 'none',
      transition: 'all 0.3s ease',
      marginTop: '0.5rem',
      position: 'relative',
      overflow: 'hidden',
    },
    buttonHover: {
      backgroundColor: '#1e40af',
      transform: 'translateY(-1px)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
    },
    divider: {
      margin: '1.5rem 0',
      textAlign: 'center',
      position: 'relative',
    },
    dividerLine: {
      height: '1px',
      backgroundColor: '#e5e7eb',
    },
    dividerText: {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: 'white',
      padding: '0 1rem',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    loginLink: {
      textAlign: 'center',
      fontSize: '0.875rem',
      color: '#6b7280',
    },
    link: {
      color: '#1d4ed8',
      textDecoration: 'none',
      fontWeight: '600',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
    },
    linkHover: {
      color: '#1e40af',
      textDecoration: 'underline',
    },
    footer: {
      backgroundColor: '#f9fafb',
      padding: '1.5rem 2rem',
      borderTop: '1px solid #e5e7eb',
      textAlign: 'center',
    },
    footerText: {
      fontSize: '0.75rem',
      color: '#6b7280',
      margin: '0',
      lineHeight: '1.5',
    },
  };

  return (
    <div style={styles.pageContainer}>
      <div style={styles.formContainer}>
        <div style={styles.header}>
          <h1 style={styles.title}>Welcome Back to NGO Connect</h1>
          <p style={styles.subtitle}>Sign in to continue your impact</p>
        </div>
        
        <div style={styles.formContent}>
          {error && (
            <div style={styles.error}>
              <svg style={styles.errorIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
              </svg>
              {error}
            </div>
          )}
          {success && (
            <div style={styles.success}>
              <svg style={styles.successIcon} fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {success}
            </div>
          )}
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="email">Email Address</label>
              <div style={styles.inputWrapper}>
                <input
                  id="email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => {
                    Object.assign(e.target.style, styles.inputFocus);
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="password">Password</label>
              <div style={styles.inputWrapper}>
                <input
                  id="password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  onFocus={(e) => {
                    Object.assign(e.target.style, styles.inputFocus);
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = '#e5e7eb';
                    e.target.style.backgroundColor = '#f9fafb';
                    e.target.style.boxShadow = 'none';
                  }}
                  placeholder="Enter your password"
                  required
                />
              </div>
            </div>
            
            <button
              type="submit"
              style={styles.button}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.buttonHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = '#1d4ed8';
                e.target.style.transform = 'translateY(0)';
                e.target.style.boxShadow = 'none';
              }}
            >
              Login
            </button>
          </form>
          
          <div style={styles.divider}>
            <div style={styles.dividerLine}></div>
            <span style={styles.dividerText}>or</span>
          </div>
          
          <div style={styles.loginLink}>
            <Link
              to="/"
              style={styles.link}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.linkHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1d4ed8';
                e.target.style.textDecoration = 'none';
              }}
            >
              Back to Home
            </Link>
            <br />
            Don't have an account?{' '}
            <Link
              to="/register"
              style={styles.link}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.linkHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1d4ed8';
                e.target.style.textDecoration = 'none';
              }}
            >
              Register now
            </Link>
          </div>
        </div>
        
        <div style={styles.footer}>
          <p style={styles.footerText}>
            By signing in, you agree to our Terms of Service and Privacy Policy.
            <br />
            Access your account to support global change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;