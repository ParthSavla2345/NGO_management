import React, { useState } from 'react';
import '../styles.css';

const About = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);

  const handleNewsletterChange = (e) => {
    setNewsletterEmail(e.target.value);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    console.log('Newsletter subscription:', newsletterEmail);
    setNewsletterSubmitted(true);
    setTimeout(() => {
      setNewsletterEmail('');
      setNewsletterSubmitted(false);
    }, 3000);
  };

  const values = [
    {
      title: 'Accessibility',
      description: 'We believe technology should be accessible to all nonprofits, regardless of size or technical expertise.',
      icon: '🌐',
    },
    {
      title: 'Transparency',
      description: 'We promote transparency in all operations, both in our own practices and in the tools we provide.',
      icon: '🔍',
    },
    {
      title: 'Impact-Driven',
      description: 'Everything we do is focused on helping NGOs maximize their positive impact in communities.',
      icon: '🚀',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Our Story at NGO Connect</h1>
          <p>
            Empowering nonprofits with tools to transform lives and achieve sustainable development goals.
          </p>
          <div className="hero-buttons">
            <a href="/register" className="btn btn-primary">Join Us</a>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="programs">
        <h2>Our Story</h2>
        <div className="container">
          <p>
            NGO Connect draws its name from the idea of fostering connections, much like the roots of a tree that intertwine to create a strong foundation. In Indian culture, community gatherings under trees symbolize unity and shared purpose. We aim to be that unifying force for nonprofits, providing a platform where they can thrive, collaborate, and amplify their impact.
          </p>
          <p>
            Founded in 2020, NGO Connect emerged from a vision to alleviate the administrative burdens faced by nonprofits, allowing them to focus on their core mission of transforming lives. Today, we empower hundreds of organizations worldwide, from grassroots initiatives to global NGOs, with tools designed for their unique needs.
          </p>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="programs">
        <h2>Our Values</h2>
        <div className="program-grid">
          {values.map((value, index) => (
            <div key={index} className="program-card">
              <div className="contact-icon">{value.icon}</div>
              <h3>{value.title}</h3>
              <p>{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Our Leadership Section */}
      <section className="impact">
        <h2>Our Leadership</h2>
        <div className="container">
          <div className="card">
            <h3>Kruti Patel, CEO</h3>
            <p>
              Kruti Patel is the Chief Executive Officer of NGO Connect. With a background in corporate leadership, Kruti pivoted to the nonprofit sector inspired by her experiences as a volunteer. Witnessing the challenges NGOs faced in managing operations, she recognized the potential of technology to create impact at scale.
            </p>
            <p>
              Since founding NGO Connect in 2020, Kruti has led the development of innovative tools that empower nonprofits across India and beyond. Under her leadership, NGO Connect has grown to support over 500 organizations, driving better outcomes for communities worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Us Section */}
      <section className="programs">
        <h2>Contact Us</h2>
        <div className="program-grid">
          <div className="program-card">
            <div className="contact-icon">✉️</div>
            <h3>Email</h3>
            <p>partnerships@ngoconnect.org</p>
            <p>For inquiries and collaborations</p>
          </div>
          <div className="program-card">
            <div className="contact-icon">📍</div>
            <h3>Delhi Office</h3>
            <p>10/1, First Floor, Sarvapriya Vihar, Delhi 110016</p>
            <p>Registered: Flat No. 2450, Sector C, Pocket-2, Vasant Kunj, New Delhi 110070</p>
          </div>
          <div className="program-card">
            <div className="contact-icon">📍</div>
            <h3>Bhopal Office</h3>
            <p>E-3/128, Arera Colony, Bhopal, Madhya Pradesh - 462010</p>
            <p>Regional office for Central India operations</p>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="donate-cta">
        <h2>Subscribe to Our Newsletter</h2>
        <p>
          Stay updated with the latest news, success stories, and tips for nonprofits.
        </p>
        <div className="container">
          {newsletterSubmitted ? (
            <div className="stat">
              <h3 style={{ color: '#10b981' }}>Thank You!</h3>
              <p>You’re subscribed! Look out for our updates in your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleNewsletterSubmit} className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  id="newsletter-email"
                  value={newsletterEmail}
                  onChange={handleNewsletterChange}
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>
              <button type="submit" className="btn btn-primary">Subscribe</button>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NGO Connect</h3>
            <p>
              Empowering nonprofits with tools to streamline operations and maximize impact.
            </p>
          </div>
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>
              Mumbai, India
              <br />
              Email: info@ngoconnect.org
              <br />
              Phone: +91-11-43123700
            </p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/about">About Us</a></li>
              <li><a href="/dashboard">Programs</a></li>
              <li><a href="/donors">Donate</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 NGO Connect. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default About;