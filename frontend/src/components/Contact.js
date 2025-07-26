import React, { useState } from 'react';
import '../styles.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    
    // Reset form after submission
    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setFormSubmitted(false);
    }, 3000);
  };

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email Us',
      details: 'support@ngoconnect.org',
      description: 'For general inquiries and support',
    },
    {
      icon: '📞',
      title: 'Call Us',
      details: '+1 (555) 123-4567',
      description: 'Monday-Friday, 9 AM - 5 PM EST',
    },
    {
      icon: '💬',
      title: 'Live Chat',
      details: 'Available through our dashboard',
      description: 'For quick assistance when logged in',
    },
  ];

  const faqs = [
    {
      question: 'How quickly can I expect a response?',
      answer: 'We aim to respond to all inquiries within 24 hours during business days.',
    },
    {
      question: 'Do you offer technical support on weekends?',
      answer: 'We offer limited technical support on weekends for urgent issues. For non-urgent matters, our team will respond on the next business day.',
    },
    {
      question: 'Can I schedule a demo of the platform?',
      answer: 'Yes! We’re happy to provide a personalized demo. Please contact us through the form above or email us at demos@ngoconnect.org to schedule.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Contact Us</h1>
          <p>
            We’re here to help! Reach out with questions, feedback, or to learn more about NGO Connect.
          </p>
          <div className="hero-buttons">
            <a href="#contact-form" className="btn btn-primary">Send a Message</a>
            <a href="/register" className="btn btn-secondary">Get Started</a>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="programs">
        <h2>Get in Touch</h2>
        <div className="program-grid">
          {contactMethods.map((method, index) => (
            <div key={index} className="program-card">
              <div className="contact-icon">{method.icon}</div>
              <h3>{method.title}</h3>
              <p>{method.details}</p>
              <p>{method.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="programs" id="contact-form">
        <h2>Send Us a Message</h2>
        <div className="container">
          <div className="card">
            {formSubmitted ? (
              <div className="stat">
                <h3 style={{ color: '#10b981' }}>Thank You!</h3>
                <p>Your message has been sent. We’ll get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="subject" className="form-label">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message" className="form-label">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="testimonials">
        <h2>Frequently Asked Questions</h2>
        <div className="testimonial-grid">
          {faqs.map((faq, index) => (
            <div key={index} className="testimonial">
              <p><strong>{faq.question}</strong></p>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Donate CTA */}
      <section className="donate-cta">
        <h2>Join Our Community</h2>
        <p>
          Sign up to access powerful tools for managing your nonprofit’s operations and making a greater impact.
        </p>
        <a href="/register" className="btn btn-primary">Get Started Today</a>
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

export default Contact;