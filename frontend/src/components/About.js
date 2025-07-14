import React from 'react';
import Navbar from './layout/Navbar';
import '../styles.css';

const About = () => {
  return (
    <div className="dashboard-container">
      <Navbar />
      <div className="dashboard-content">
        <div className="about-content">
          <h1>About NGO Connect</h1>
          
          <div className="card section">
            <h2>Our Mission</h2>
            <p>
              NGO Connect is dedicated to empowering nonprofits to achieve their missions through efficient management tools. 
              We believe that by streamlining administrative processes, NGOs can focus more on their core mission of making a positive impact in communities around the world.
            </p>
          </div>
          
          <div className="section">
            <h2>What We Offer</h2>
            <div className="grid-container">
              <div className="card">
                <h3>Donation Management</h3>
                <p>
                  Track, manage, and acknowledge donations from various sources with our intuitive platform. 
                  Generate reports and insights to understand your funding patterns.
                </p>
              </div>
              
              <div className="card">
                <h3>Volunteer Coordination</h3>
                <p>
                  Organize volunteer activities, manage schedules, and track participation to maximize the impact of your volunteer network.
                </p>
              </div>
              
              <div className="card">
                <h3>Project Tracking</h3>
                <p>
                  Monitor project progress, allocate resources efficiently, and measure outcomes to ensure your initiatives deliver meaningful results.
                </p>
              </div>
            </div>
          </div>
          
          <div className="card section">
            <h2>Our Story</h2>
            <p>
              Founded in 2020, NGO Connect was born from the recognition that many nonprofit organizations struggle with administrative burdens that divert resources from their core mission. 
              Our team of developers and nonprofit professionals collaborated to create a platform specifically designed for the unique needs of NGOs.
            </p>
            <p>
              Today, we serve hundreds of organizations worldwide, from small grassroots initiatives to established international nonprofits. 
              Our platform continues to evolve based on feedback from our users and changing needs in the nonprofit sector.
            </p>
          </div>
          
          <div className="section">
            <h2>Our Values</h2>
            <div className="flex-container">
              <div className="card" style={{ flex: '1 1 200px' }}>
                <h3>Accessibility</h3>
                <p>
                  We believe technology should be accessible to all nonprofits, regardless of size or technical expertise.
                </p>
              </div>
              
              <div className="card" style={{ flex: '1 1 200px' }}>
                <h3>Transparency</h3>
                <p>
                  We promote transparency in all operations, both in our own practices and in the tools we provide.
                </p>
              </div>
              
              <div className="card" style={{ flex: '1 1 200px' }}>
                <h3>Impact-Driven</h3>
                <p>
                  Everything we do is focused on helping NGOs maximize their positive impact in communities.
                </p>
              </div>
            </div>
          </div>
          
          <div className="section">
            <h2>Join Our Community</h2>
            <p>
              Connect with other nonprofit organizations using our platform to share best practices and collaborate on initiatives.
            </p>
            <a href="/register" className="btn">Get Started Today</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;