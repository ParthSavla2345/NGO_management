import React from 'react';
import Navbar from './layout/Navbar';
import '../styles.css';

const Home = () => {
  const campaigns = [
    {
      id: 1,
      title: 'Support 1000 Childrens Education',
      description: 'Help provide quality education to underprivileged children.',
      goal: 50000,
      raised: 25000,
    },
    {
      id: 2,
      title: 'Healthcare for Remote Villages',
      description: 'Fund mobile healthcare units for rural communities.',
      goal: 30000,
      raised: 15000,
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Empowering Communities for a Brighter Future</h1>
          <p>
            NGO Connect is dedicated to transforming lives through education,
            healthcare, livelihood, and women empowerment,{' '}
            <strong>TOWARDS ACHIEVING SUSTAINABLE DEVELOPMENT GOALS</strong>.
          </p>
          <div className="hero-buttons">
            <a href="/donate" className="btn btn-primary">Donate Now</a>
            <a href="/volunteer-staff" className="btn btn-secondary">Volunteer</a>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="programs">
        <h2>Our Programs</h2>
        <div className="program-grid">
          <div className="program-card">
            
            <h3>Mission Education</h3>
            <p>
              Providing quality education to underprivileged children across India.
            </p>
            <a href="/programs/education" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="program-card">
            
            <h3>Smile on Wheels</h3>
            <p>
              Mobile healthcare units delivering services to remote communities.
            </p>
            <a href="/programs/healthcare" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="program-card">
           
            <h3>STeP</h3>
            <p>
              Skill training for youth to secure sustainable livelihoods.
            </p>
            <a href="/programs/livelihood" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="program-card">
            
            <h3>Swabhiman</h3>
            <p>
              Empowering women through skill development and financial literacy.
            </p>
            <a href="/programs/women" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="program-card">
            
            <h3>Swatch Bharat Abhiyaan</h3>
            <p>
              Pura desh swatch
            </p>
            <a href="/programs/women" className="btn btn-outline">
              Learn More
            </a>
          </div>
          <div className="program-card">
            
            <h3>KTST</h3>
            <p>
              Skill development 
            </p>
            <a href="/programs/women" className="btn btn-outline">
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="impact">
        <h2>Our Impact</h2>
        <div className="impact-stats">
          <div className="stat">
            <h3>1.5M+</h3>
            <p>Children & Families Benefited</p>
          </div>
          <div className="stat">
            <h3>400+</h3>
            <p>Projects Across India</p>
          </div>
          <div className="stat">
            <h3>25</h3>
            <p>States Covered</p>
          </div>
          <div className="stat">
            <h3>65K+</h3>
            <p>Youth Trained</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>Stories of Change</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            <p>
              "Thanks to NGO Connect's education program, my daughter now dreams of
              becoming a doctor."
            </p>
            <h4>— Sunita, Mother, Rajasthan</h4>
          </div>
          <div className="testimonial">
            <p>
              "The skill training helped me start my own business and support my
              family."
            </p>
            <h4>— Yashoda, Entrepreneur, Delhi</h4>
          </div>
        </div>
      </section>

      {/* Campaigns Section */}
      <section className="campaigns">
        <h2>Our Fundraising Campaigns</h2>
        <div className="campaign-grid">
          {campaigns.map((campaign) => (
            <div key={campaign.id} className="campaign-card">
              <h3>{campaign.title}</h3>
              <p>{campaign.description}</p>
              <div className="progress-bar">
                <div
                  className="progress"
                  style={{ width: `${(campaign.raised / campaign.goal) * 100}%` }}
                ></div>
              </div>
              <p>
                Raised: ${campaign.raised} of ${campaign.goal}
              </p>
              <a href={`/donate?campaign=${campaign.id}`} className="btn btn-primary">
                Contribute
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* Partners Section */}
      <section className="partners">
        <h2>Our Partners</h2>
        <div className="partner-logos">
                  </div>
      </section>

      {/* News Section */}
      <section className="news">
        <h2>Recent News</h2>
        <div className="news-grid">
          <div className="news-item">
            
            <h3>Health Camp in Odisha</h3>
            <p>
              Over 500 families benefited from our recent health camp in Kalahandi.
            </p>
            <a href="/news/health-camp" className="btn btn-outline">
              Read More
            </a>
          </div>
          <div className="news-item">
            
            <h3>SIFFCY Film Festival</h3>
            <p>
              The 10th Smile International Film Festival inspired young minds.
            </p>
            <a href="/news/siffcy" className="btn btn-outline">
              Read More
            </a>
          </div>
        </div>
      </section>

      {/* Donate CTA */}
      <section className="donate-cta">
        <h2>Make a Difference Today</h2>
        <p>
          Your donation can transform lives. Support our mission to empower
          communities across India.
        </p>
        <a href="/donate" className="btn btn-primary">Donate Now</a>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>NGO Connect</h3>
            <p>
              Empowering underprivileged children and families through education,
              healthcare, and livelihood programs.
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
              <li><a href="/programs">Programs</a></li>
              <li><a href="/donate">Donate</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>Follow Us</h3>
            <div className="social-links">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                Facebook
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                Twitter
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
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

export default Home;