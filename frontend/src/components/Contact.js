import React, { useState } from 'react';
import Navbar from './layout/Navbar';
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
    // In a real application, you would send the form data to your backend
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

  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="contact-content">
          <h1>Contact Us</h1>
          
          <div className="card section">
            <p>
              We're here to help! Whether you have questions about using NGO Connect, need technical support, 
              or want to provide feedback on our platform, our team is ready to assist you.
            </p>
          </div>
          
          <div className="section">
            <h2>Get in Touch</h2>
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <h3>Email Us</h3>
                <p>support@ngoconnect.org</p>
                <p>For general inquiries and support</p>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📞</div>
                <h3>Call Us</h3>
                <p>+1 (555) 123-4567</p>
                <p>Monday-Friday, 9 AM - 5 PM EST</p>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">💬</div>
                <h3>Live Chat</h3>
                <p>Available through our dashboard</p>
                <p>For quick assistance when logged in</p>
              </div>
            </div>
          </div>
          
          <div className="section">
            <h2>Send Us a Message</h2>
            <div className="card">
              {formSubmitted ? (
                <div style={{ textAlign: 'center', padding: '1rem' }}>
                  <h3 style={{ color: '#10b981' }}>Thank You!</h3>
                  <p>Your message has been sent. We'll get back to you shortly.</p>
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
                  
                  <button type="submit" className="btn">Send Message</button>
                </form>
              )}
            </div>
          </div>
          
          <div className="section">
            <h2>FAQs</h2>
            <div className="card">
              <h3>How quickly can I expect a response?</h3>
              <p>We aim to respond to all inquiries within 24 hours during business days.</p>
            </div>
            
            <div className="card">
              <h3>Do you offer technical support on weekends?</h3>
              <p>We offer limited technical support on weekends for urgent issues. For non-urgent matters, our team will respond on the next business day.</p>
            </div>
            
            <div className="card">
              <h3>Can I schedule a demo of the platform?</h3>
              <p>Yes! We're happy to provide a personalized demo. Please contact us through the form above or email us at demos@ngoconnect.org to schedule.</p>
            </div>
          </div>
          
          <div className="section" style={{ textAlign: 'center' }}>
            <h2>Connect With Us</h2>
            <p>Follow us on social media for updates, tips, and success stories.</p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', margin: '1rem 0' }}>
              <a href="#" className="btn btn-outline" style={{ minWidth: '120px' }}>Twitter</a>
              <a href="#" className="btn btn-outline" style={{ minWidth: '120px' }}>LinkedIn</a>
              <a href="#" className="btn btn-outline" style={{ minWidth: '120px' }}>Facebook</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;