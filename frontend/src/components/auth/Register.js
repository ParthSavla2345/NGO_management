import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import * as authService from '../../services/auth_service';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirm_password) {
      setError('Passwords do not match');
      return;
    }
    try {
      await authService.register(formData);
      setError('Registration successful! Please wait for further instructions.');
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed');
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
    errorIcon: {
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
          <h1 style={styles.title}>Create an Account</h1>
          <p style={styles.subtitle}>Join us to make a difference</p>
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
          
          <form onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="name">Full Name</label>
              <div style={styles.inputWrapper}>
                <input
                  id="name"
                  type="text"
                  name="name"
                  value={formData.name}
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
                  placeholder="Enter your full name"
                  required
                />
              </div>
            </div>
            
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
                <p style={{ fontSize: '0.75rem', color: '#6b7280', marginTop: '0.25rem' }}>
                  Password must be at least 8 characters long
                </p>
              </div>
            </div>
            
            <div style={styles.formGroup}>
              <label style={styles.label} htmlFor="confirm_password">Confirm Password</label>
              <div style={styles.inputWrapper}>
                <input
                  id="confirm_password"
                  type="password"
                  name="confirm_password"
                  value={formData.confirm_password}
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
                  placeholder="Confirm your password"
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
              Register
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
            Already have an account?{' '}
            <Link
              to="/login"
              style={styles.link}
              onMouseEnter={(e) => {
                Object.assign(e.target.style, styles.linkHover);
              }}
              onMouseLeave={(e) => {
                e.target.style.color = '#1d4ed8';
                e.target.style.textDecoration = 'none';
              }}
            >
              Login here
            </Link>
          </div>
        </div>
        
        <div style={styles.footer}>
          <p style={styles.footerText}>
            By registering, you agree to our Terms of Service and Privacy Policy.
            <br />
            Join us to support global change.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;