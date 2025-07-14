import React, { useContext, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Handle window resize
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      // Close mobile menu if screen becomes larger than mobile breakpoint
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isMobile = windowWidth <= 768;

  const navbarStyles = {
    navbar: {
      backgroundColor: '#1d4ed8',
      padding: '1rem',
      boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'relative',
    },
    logo: {
      color: 'white',
      fontSize: '1.25rem',
      fontWeight: 'bold',
      textDecoration: 'none',
      display: 'flex',
      alignItems: 'center',
    },
    navLinks: {
      display: isMobile ? (isMenuOpen ? 'flex' : 'none') : 'flex',
      gap: '1rem',
      flexDirection: isMobile ? 'column' : 'row',
      position: isMobile ? 'absolute' : 'static',
      top: isMobile ? '100%' : 'auto',
      right: isMobile ? '0' : 'auto',
      backgroundColor: isMobile ? '#1d4ed8' : 'transparent',
      width: isMobile ? '200px' : 'auto',
      padding: isMobile ? '1rem' : '0',
      borderRadius: isMobile ? '0 0 0.5rem 0.5rem' : '0',
      boxShadow: isMobile ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
      zIndex: 1000,
    },
    link: {
      color: 'white',
      textDecoration: 'none',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.25rem',
      transition: 'background-color 0.3s ease, color 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      textAlign: isMobile ? 'left' : 'center',
    },
    button: {
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      padding: '0.5rem 0.75rem',
      borderRadius: '0.25rem',
      cursor: 'pointer',
      fontFamily: 'inherit',
      fontSize: '1rem',
      transition: 'background-color 0.3s ease',
      width: isMobile ? '100%' : 'auto',
      textAlign: isMobile ? 'left' : 'center',
    },
    hamburger: {
      display: isMobile ? 'block' : 'none',
      backgroundColor: 'transparent',
      border: 'none',
      color: 'white',
      cursor: 'pointer',
      padding: '0.5rem',
    },
    hamburgerIcon: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      width: '24px',
      height: '18px',
    },
    hamburgerLine: {
      width: '100%',
      height: '2px',
      backgroundColor: 'white',
      transition: 'all 0.3s ease',
    },
    // Animated hamburger to X
    hamburgerTop: {
      width: '100%',
      height: '2px',
      backgroundColor: 'white',
      transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none',
      transition: 'all 0.3s ease',
    },
    hamburgerMiddle: {
      width: '100%',
      height: '2px',
      backgroundColor: 'white',
      opacity: isMenuOpen ? 0 : 1,
      transition: 'all 0.3s ease',
    },
    hamburgerBottom: {
      width: '100%',
      height: '2px',
      backgroundColor: 'white',
      transform: isMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none',
      transition: 'all 0.3s ease',
    },
  };

  const renderNavLinks = () => (
    <>
      <Link 
        to="/" 
        style={navbarStyles.link}
        onClick={closeMenu}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        style={navbarStyles.link}
        onClick={closeMenu}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        About Us
      </Link>
      <Link 
        to="/contact" 
        style={navbarStyles.link}
        onClick={closeMenu}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = 'transparent';
        }}
      >
        Contact
      </Link>
      {user ? (
        <>
          <Link 
            to="/dashboard" 
            style={navbarStyles.link}
            onClick={closeMenu}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Dashboard
          </Link>
          <button 
            onClick={handleLogout} 
            style={navbarStyles.button}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link 
            to="/login" 
            style={navbarStyles.link}
            onClick={closeMenu}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'transparent';
            }}
          >
            Login
          </Link>
          <Link 
            to="/register" 
            style={{
              ...navbarStyles.link,
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              fontWeight: '500',
            }}
            onClick={closeMenu}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
            }}
          >
            Register
          </Link>
        </>
      )}
    </>
  );

  return (
    <nav style={navbarStyles.navbar}>
      <div style={navbarStyles.container}>
        <Link to="/" style={navbarStyles.logo}>
          Donation Platform
        </Link>
        
        <button 
          style={navbarStyles.hamburger} 
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <div style={navbarStyles.hamburgerIcon}>
            <div style={navbarStyles.hamburgerTop}></div>
            <div style={navbarStyles.hamburgerMiddle}></div>
            <div style={navbarStyles.hamburgerBottom}></div>
          </div>
        </button>
        
        <div style={navbarStyles.navLinks}>
          {renderNavLinks()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;