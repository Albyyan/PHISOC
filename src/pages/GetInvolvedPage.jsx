import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/get-involved.css';
import PageFadeLoader from '../components/PageFadeLoader';

// Icon imports
import memberIcon from '../asset/member.png';
import submissionsIcon from '../asset/submissions.png';
import connectionsIcon from '../asset/connections.png';
import facebookIcon from '../asset/facebook.png';
import discordIcon from '../asset/discord.png';
import instaIcon from '../asset/insta.png';

const opportunities = [
  {
    title: 'Become a Member',
    icon: memberIcon,
    description: 'Join our community of curious minds.',
    action: 'Sign Up',
    link: '#membership',
  },
  {
    title: 'Submit Your Work',
    icon: submissionsIcon,
    description:
      'Share your philosophical essays, poetry, or creative writing. We publish outstanding work from students.',
    action: 'Submit',
    link: '/submit',
  },
  {
    title: 'Join the Team',
    icon: connectionsIcon,
    description:
      'Help shape the society by taking on a leadership role. Applications open at the start of each year.',
    action: 'Learn More',
    link: '#exec',
  },
];

export default function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      <NavBar />
      <PageFadeLoader duration={600}>

      <div className="involved-container">
        {/* Hero Section */}
        <section className="involved-hero">
          <div className="hero-decoration"></div>
          <h1>Get Involved</h1>
          <p className="hero-tagline">
            Be part of something meaningful
          </p>
        </section>

{/* Get Involved Section */}
<section className="activities-section">
  <div className="section-label">Ways to Participate</div>
  <h2>Join Our Community</h2>

  <div className="activities-grid">
    <div className="activity-card">
      <div className="activity-icon">
        <img src={memberIcon} alt="Member Icon" />
      </div>
      <h3>Become a Member</h3>
      <p>
        Join our community of curious minds and participate in our discussions,
        events, and publications.
      </p>
      <a href="#membership" className="btn-primary">Sign Up</a>
    </div>

    <div className="activity-card">
      <div className="activity-icon">
        <img src={submissionsIcon} alt="Submission Icon" />
      </div>
      <h3>Submit Your Work</h3>
      <p>
        Share your philosophical essays with us. We
        publish outstanding work from students and thinkers alike.

      </p>
      <a href="/submit" className="btn-primary">Submit</a>
    </div>

    <div className="activity-card">
      <div className="activity-icon">
        <img src={connectionsIcon} alt="Connections Icon" />
      </div>
      <h3>Join the Team</h3>
      <p>
        Help shape the society by taking on a leadership role. Applications open
        at the start of each year.
      </p>
      <a href="#exec" className="btn-primary">Learn More</a>
    </div>
  </div>
</section>

        {/* Membership Section */}
        <section className="membership-section" id="membership">
          <div className="section-label">Membership</div>
          <h2>Why Become a Member?</h2>
          <div className="membership-content">
            <div className="membership-benefits">
              <div className="benefit-item">
                <div className="benefit-number">01</div>
                <div className="benefit-text">
                  <h3>Access All Events</h3>
                  <p>Free entry to all discussions, lectures, and social events throughout the year.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">02</div>
                <div className="benefit-text">
                  <h3>Exclusive Content</h3>
                  <p>Member-only resources, reading lists, and early access to publications.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">03</div>
                <div className="benefit-text">
                  <h3>Networking</h3>
                  <p>Connect with like-minded students, academics, and philosophy enthusiasts.</p>
                </div>
              </div>
              <div className="benefit-item">
                <div className="benefit-number">04</div>
                <div className="benefit-text">
                  <h3>Recognition</h3>
                  <p>Eligibility for awards, publication opportunities, and recommendation letters.</p>
                </div>
              </div>
            </div>
            <div className="membership-cta">
              <div className="price-card">
                <h3>Annual Membership</h3>
                <div className="price">$0</div>
                <button
                  className="join-btn"
                  onClick={() => window.open('https://campus.hellorubric.com/?s=6384', '_blank')}
                >
                  Join Now
                </button>

              </div>
            </div>
          </div>
        </section>

        {/* Executive Positions Section */}
        <section className="exec-section" id="exec">
          <div className="section-label">Internals</div>
          <h2>Join the Subcommittee Team</h2>
          <p className="section-intro">
            Applications for subcommittee positions open up soon. Come back later for more details
          </p>
          <div className="exec-grid">
            <div className="exec-role">
              <h3>Marketing Subcommittee</h3>
              <p>Lead the society, chair meetings, and represent us at university events.</p>
            </div>
            <div className="exec-role">
              <h3>Events Subcommittee</h3>
              <p>Support the president and oversee day-to-day operations.</p>
            </div>
            <div className="exec-role">
              <h3>Roundtable Subcommittee</h3>
              <p>Manage our journal, review submissions, and coordinate with writers.</p>
            </div>
          </div>
        </section>

{/* Contact Section */}
<section className="contact-section">
  <div className="contact-content">
    <h2>Have Questions?</h2>
    <p>We'd love to hear from you. Reach out to learn more about getting involved.</p>

    <div className="contact-info">
      <a
        href="https://www.facebook.com/unswphisoc"
        className="contact-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={facebookIcon} alt="Facebook" className="contact-icon-img" />
        <span>Find us on Facebook</span>
      </a>

      <a
        href="https://discord.gg/rCSVqnpD99"
        className="contact-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={discordIcon} alt="Discord" className="contact-icon-img" />
        <span>Join our Discord server</span>
      </a>

      <a
        href="https://www.instagram.com/unswphisoc/"
        className="contact-item"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={instaIcon} alt="Instagram" className="contact-icon-img" />
        <span>Follow us on Instagram</span>
      </a>
    </div>
  </div>
</section>

      </div>
      </PageFadeLoader>

      <Footer />
    </div>
  );
}