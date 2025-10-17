import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/get-involved.css';

const opportunities = [
  {
    title: 'Become a Member',
    icon: '🎓',
    description: 'Join our community of curious minds.',
    action: 'Sign Up',
    link: '#membership'
  },
  {
    title: 'Submit Your Work',
    icon: '✍️',
    description: 'Share your philosophical essays, poetry, or creative writing. We publish outstanding work from students.',
    action: 'Submit',
    link: '/submit'
  },
  {
    title: 'Join the Team',
    icon: '👥',
    description: 'Help shape the society by taking on a leadership role. Applications open at the start of each year.',
    action: 'Learn More',
    link: '#exec'
  },
  {
    title: 'Volunteer at Events',
    icon: '🤝',
    description: 'Help organize and run our events. Great way to meet people and gain event management experience.',
    action: 'Volunteer',
    link: '#volunteer'
  }
];

const sponsors = [
  {
    tier: 'Platinum',
    benefits: [
      'Logo on all promotional materials',
      'Dedicated newsletter feature',
      'Speaking slot at major events',
      'Social media recognition',
      'Custom partnership opportunities'
    ],
    amount: '$5,000+'
  },
  {
    tier: 'Gold',
    benefits: [
      'Logo on website and events',
      'Newsletter mention',
      'Social media recognition',
      'Event booth opportunity'
    ],
    amount: '$2,500 - $4,999'
  },
  {
    tier: 'Silver',
    benefits: [
      'Logo on website',
      'Newsletter mention',
      'Social media thank you'
    ],
    amount: '$1,000 - $2,499'
  },
  {
    tier: 'Bronze',
    benefits: [
      'Name on website',
      'Social media recognition'
    ],
    amount: '$500 - $999'
  }
];

export default function GetInvolvedPage() {
  return (
    <div className="get-involved-page">
      <NavBar />
      
      <div className="involved-container">
        {/* Hero Section */}
        <section className="involved-hero">
          <div className="hero-decoration"></div>
          <h1>Get Involved</h1>
          <p className="hero-tagline">
            Be part of something meaningful
          </p>
        </section>

        {/* Opportunities Section */}
        <section className="opportunities-section">
          <div className="section-label">Ways to Participate</div>
          <h2>Join Our Community</h2>
          <div className="opportunities-grid">
            {opportunities.map((opp, index) => (
              <div key={index} className="opportunity-card">
                <div className="opp-icon">{opp.icon}</div>
                <h3>{opp.title}</h3>
                <p>{opp.description}</p>
                {opp.link.startsWith('/') ? (
                  <Link to={opp.link} className="opp-btn">
                    {opp.action} →
                  </Link>
                ) : (
                  <a href={opp.link} className="opp-btn">
                    {opp.action} →
                  </a>
                )}
              </div>
            ))}
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
                <div className="price">$10</div>
                <p className="price-note">One-time fee for the academic year</p>
                <button className="join-btn">Join Now</button>
                <p className="price-disclaimer">
                  Financial assistance available. Contact us for details.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Executive Positions Section */}
        <section className="exec-section" id="exec">
          <div className="section-label">Leadership</div>
          <h2>Join the Subcommittee Team</h2>
          <p className="section-intro">
            Applications for executive positions open at the beginning of each academic year. 
            We're looking for passionate, organized individuals to help lead the society.
          </p>
          <div className="exec-grid">
            <div className="exec-role">
              <h3>President</h3>
              <p>Lead the society, chair meetings, and represent us at university events.</p>
            </div>
            <div className="exec-role">
              <h3>Vice President</h3>
              <p>Support the president and oversee day-to-day operations.</p>
            </div>
            <div className="exec-role">
              <h3>Publications Director</h3>
              <p>Manage our journal, review submissions, and coordinate with writers.</p>
            </div>
          </div>
        </section>

        {/* Sponsorship Section */}
        <section className="sponsorship-section" id="sponsorships">
          <div className="section-label">Partnerships</div>
          <h2>Sponsor the Philosophy Society</h2>
          <p className="section-intro">
            Support philosophical education and community building at UNSW. 
            Our sponsorship packages offer visibility and engagement with an intellectually curious audience.
          </p>
          <div className="sponsors-grid">
            {sponsors.map((sponsor, index) => (
              <div key={index} className="sponsor-card">
                <div className="sponsor-tier">{sponsor.tier}</div>
                <div className="sponsor-amount">{sponsor.amount}</div>
                <ul className="sponsor-benefits">
                  {sponsor.benefits.map((benefit, i) => (
                    <li key={i}>{benefit}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="sponsor-cta">
            <p>Interested in partnering with us?</p>
            <button className="contact-btn">Get in Touch</button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section">
          <div className="contact-content">
            <h2>Have Questions?</h2>
            <p>We'd love to hear from you. Reach out to learn more about getting involved.</p>
            <div className="contact-info">
              <div className="contact-item">
                <span className="contact-icon">✉️</span>
                <span>philosophy@unsw.edu.au</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">💬</span>
                <span>Join our Discord server</span>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📱</span>
                <span>Follow us on Instagram</span>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}