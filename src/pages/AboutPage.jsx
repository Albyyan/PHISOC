import React from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/about.css';

const teamMembers = [
  { role: 'President', name: 'TBA' },
  { role: 'Vice President', name: 'TBA' },
  { role: 'Publications Director', name: 'TBA' },
  { role: 'Events Coordinator', name: 'TBA' },
  { role: 'Marketing Officer', name: 'TBA' },
  { role: 'Treasurer', name: 'TBA' }
];

const values = [
  {
    title: 'Intellectual Curiosity',
    description: 'We foster a space where questions are celebrated and critical thinking is encouraged.'
  },
  {
    title: 'Inclusive Dialogue',
    description: 'Philosophy thrives in diversity. We welcome perspectives from all backgrounds and disciplines.'
  },
  {
    title: 'Academic Excellence',
    description: 'We maintain high standards in our publications and events while remaining accessible to all.'
  },
  {
    title: 'Community Building',
    description: 'Beyond academics, we create lasting connections between students who share a passion for ideas.'
  }
];

export default function AboutPage() {
  return (
    <div className="about-page">
      <NavBar />
      
      <div className="about-container">
        {/* Hero Section */}
        <section className="about-hero">
          <div className="hero-decoration"></div>
          <h1>About Us</h1>
          <p className="hero-tagline">
            Where Curiosity Meets Community
          </p>
        </section>

        {/* Mission Section */}
        <section className="mission-section">
          <div className="section-label">Our Mission</div>
          <h2>Fostering Philosophical Inquiry at UNSW</h2>
          <div className="mission-content">
            <p>
              The UNSW Philosophy Society is dedicated to creating a vibrant intellectual 
              community where students can explore the fundamental questions that shape our 
              understanding of existence, knowledge, ethics, and reality itself.
            </p>
            <p>
              Since our founding, we have been committed to making philosophy accessible 
              and engaging for students across all disciplines. Whether you're a philosophy 
              major or simply curious about life's big questions, our society provides a 
              welcoming space for rigorous discussion and creative exploration.
            </p>
            <p>
              Through weekly discussions, annual competitions, guest lectures, and our 
              flagship publication, we bring together students, academics, and thinkers 
              who share a passion for philosophical inquiry.
            </p>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section">
          <div className="section-label">Our Values</div>
          <h2>What We Stand For</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-number">{String(index + 1).padStart(2, '0')}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* What We Do Section */}
        <section className="activities-section">
          <div className="section-label">What We Do</div>
          <h2>Our Activities</h2>
          <div className="activities-grid">
            <div className="activity-card">
              <div className="activity-icon">📚</div>
              <h3>Weekly Discussions</h3>
              <p>
                Join our weekly discussion groups where we explore philosophical texts, 
                contemporary issues, and timeless questions in an informal, engaging atmosphere.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">✍️</div>
              <h3>Publications</h3>
              <p>
                Our journal features essays, poetry, and philosophical analysis from students 
                and academics, providing a platform for original thought and creative expression.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🎓</div>
              <h3>Guest Lectures</h3>
              <p>
                We host renowned philosophers, academics, and thinkers who share their 
                research and engage with our community on pressing philosophical topics.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🏆</div>
              <h3>Competitions</h3>
              <p>
                Our annual essay and creative writing competitions challenge students to 
                think deeply and express their ideas with clarity and originality.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🤝</div>
              <h3>Social Events</h3>
              <p>
                Beyond the academic, we organize social gatherings, movie nights, and 
                casual meetups to build a strong, supportive community.
              </p>
            </div>
            <div className="activity-card">
              <div className="activity-icon">🌐</div>
              <h3>Collaborations</h3>
              <p>
                We partner with other societies and departments to create interdisciplinary 
                events that bridge philosophy with science, arts, and politics.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section">
          <div className="section-label">Leadership</div>
          <h2>Executive Team</h2>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-card">
                <div className="team-placeholder">
                  <div className="team-initial">{member.role.charAt(0)}</div>
                </div>
                <h3>{member.role}</h3>
                <p>{member.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join CTA Section */}
        <section className="join-cta-section">
          <div className="cta-content">
            <h2>Join Our Community</h2>
            <p>
              Whether you're a philosophy student or simply curious about life's big questions, 
              there's a place for you in our society.
            </p>
            <div className="cta-buttons">
              <a href="#get-involved" className="btn-primary">Get Involved</a>
              <a href="#events" className="btn-secondary">View Events</a>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}