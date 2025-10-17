import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/events.css';

const upcomingEvents = [
  {
    id: 1,
    title: 'Introduction to Existentialism',
    date: '2025-02-15',
    time: '6:00 PM - 8:00 PM',
    location: 'Mathews Theatre A',
    type: 'Discussion',
    description: 'Explore the philosophy of existence through the works of Sartre, Camus, and Kierkegaard. Open to all levels.',
    imageTemplate: 'existentialism'
  },
  {
    id: 2,
    title: 'Ethics in the Age of AI',
    date: '2025-02-22',
    time: '5:30 PM - 7:30 PM',
    location: 'Online via Zoom',
    type: 'Lecture',
    description: 'Guest lecture by Dr. Sarah Chen on moral considerations in artificial intelligence and machine learning.',
    imageTemplate: 'ai-ethics'
  },
  {
    id: 3,
    title: 'Philosophy Book Club: The Republic',
    date: '2025-03-01',
    time: '4:00 PM - 6:00 PM',
    location: 'Quad Lawn',
    type: 'Social',
    description: 'Join us for a casual discussion of Plato\'s Republic over coffee and snacks. All welcome!',
    imageTemplate: 'book-club'
  },
  {
    id: 4,
    title: 'Annual Essay Competition Launch',
    date: '2025-03-08',
    time: '12:00 PM - 2:00 PM',
    location: 'Webster Theatre',
    type: 'Competition',
    description: 'Launch of our annual philosophical essay competition. Info session and Q&A.',
    imageTemplate: 'competition'
  }
];

const pastEvents = [
  {
    id: 5,
    title: 'Philosophy & Film: The Matrix',
    date: '2025-01-20',
    type: 'Social',
    imageTemplate: 'film'
  },
  {
    id: 6,
    title: 'Debate: Free Will vs Determinism',
    date: '2025-01-15',
    type: 'Discussion',
    imageTemplate: 'debate'
  }
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      weekday: 'long',
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const getEventColor = (type) => {
    const colors = {
      'Discussion': '#8b7a6a',
      'Lecture': '#6a7a8b',
      'Social': '#7a6a5a',
      'Competition': '#6a5a7a'
    };
    return colors[type] || '#C9A78C';
  };

  const getImageGradient = (template) => {
    const gradients = {
      'existentialism': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      'ai-ethics': 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      'book-club': 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      'competition': 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)',
      'film': 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      'debate': 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)'
    };
    return gradients[template] || 'linear-gradient(135deg, #C9A78C 0%, #8b7a6a 100%)';
  };

  return (
    <div className="events-page">
      <NavBar />
      
      <div className="events-container">
        {/* Hero Section */}
        <section className="events-hero">
          <div className="hero-decoration"></div>
          <h1>Events</h1>
          <p className="hero-tagline">
            Join us for discussions, lectures, and community gatherings
          </p>
        </section>

        {/* Tab Navigation */}
        <div className="events-tabs">
          <button 
            className={`tab-btn ${activeTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setActiveTab('upcoming')}
          >
            Upcoming Events
          </button>
          <button 
            className={`tab-btn ${activeTab === 'past' ? 'active' : ''}`}
            onClick={() => setActiveTab('past')}
          >
            Past Events
          </button>
        </div>

        {/* Upcoming Events */}
        {activeTab === 'upcoming' && (
          <section className="events-list">
            {upcomingEvents.map((event) => (
              <article key={event.id} className="event-card">
                <div 
                  className="event-image"
                  style={{ background: getImageGradient(event.imageTemplate) }}
                >
                  <div className="event-overlay">
                    <span 
                      className="event-type"
                      style={{ backgroundColor: getEventColor(event.type) }}
                    >
                      {event.type}
                    </span>
                  </div>
                </div>
                
                <div className="event-content">
                  <div className="event-date-badge">
                    <div className="date-day">
                      {new Date(event.date).getDate()}
                    </div>
                    <div className="date-month">
                      {new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}
                    </div>
                  </div>

                  <div className="event-details">
                    <h2>{event.title}</h2>
                    <div className="event-meta">
                      <div className="meta-item">
                        <span className="meta-icon">📅</span>
                        <span>{formatDate(event.date)}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">🕐</span>
                        <span>{event.time}</span>
                      </div>
                      <div className="meta-item">
                        <span className="meta-icon">📍</span>
                        <span>{event.location}</span>
                      </div>
                    </div>
                    <p className="event-description">{event.description}</p>
                    <button className="rsvp-btn">RSVP</button>
                  </div>
                </div>
              </article>
            ))}
          </section>
        )}

        {/* Past Events */}
        {activeTab === 'past' && (
          <section className="past-events-grid">
            {pastEvents.map((event) => (
              <div key={event.id} className="past-event-card">
                <div 
                  className="past-event-image"
                  style={{ background: getImageGradient(event.imageTemplate) }}
                >
                  <div className="past-event-overlay">
                    <span className="past-label">Past Event</span>
                  </div>
                </div>
                <div className="past-event-info">
                  <h3>{event.title}</h3>
                  <p className="past-event-date">
                    {formatDate(event.date)}
                  </p>
                  <span 
                    className="past-event-type"
                    style={{ color: getEventColor(event.type) }}
                  >
                    {event.type}
                  </span>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* Newsletter CTA */}
        <section className="newsletter-section">
          <div className="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Subscribe to our newsletter to receive updates about upcoming events and activities.</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="Enter your email address" 
                className="newsletter-input"
              />
              <button className="newsletter-btn">Subscribe</button>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}