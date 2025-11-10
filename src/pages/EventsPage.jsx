import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/events.css';
import PageFadeLoader from '../components/PageFadeLoader';

// Image imports
import slaveryImg from '../asset/religion.jpg';
import memoryImg from '../asset/memories.jpg';
import sikhImg from '../asset/sikh.jpg';
import discordIcon from '../asset/discord.png';
import instaIcon from '../asset/insta.png';
import facebookIcon from '../asset/facebook.png';

const upcomingEvents = [
  {
    id: 1,
    title: 'Is Religion Slavery?',
    date: '2025-11-14',
    time: '3:00 PM - 5:00 PM',
    location: 'QuadG054',
    type: 'Discussion',
    description:
      'Is faith a path to liberation or submission? Does belief empower us, or bind us? Join us as we explore the philosophical tensions between freedom, obedience, and spiritual devotion.',
    image: slaveryImg,
  },
];

const pastEvents = [
  {
    id: 5,
    title: 'PHI✧SOC & PSYCHSOC ROUNDTABLE: ARE WE OUR MEMORIES?',
    date: '2025-08-01',
    type: 'Discussion',
    image: memoryImg,
  },
  {
    id: 6,
    title: 'Divine Echoes: Tracing Sufi and Sikh Wisdom Throughout Time',
    date: '2025-01-15',
    type: 'Discussion',
    image: sikhImg,
  },
];

export default function EventsPage() {
  const [activeTab, setActiveTab] = useState('upcoming');

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const getEventColor = (type) => {
    switch (type) {
      case 'Discussion':
        return '#C1A57B';
      case 'Lecture':
        return '#8BA3D9';
      default:
        return '#999';
    }
  };

  return (
    <div className="events-page">
      <NavBar />
      <PageFadeLoader duration={600}>

      <div className="events-container">
        {/* Hero Section */}
        <section className="events-hero">
          <div className="hero-decoration"></div>
          <h1>Events</h1>
          <p className="hero-tagline">
            Join us for discussions, lectures, and community gatherings
          </p>
        </section>

        {/* Tabs */}
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
                <div className="event-image">
                  <img src={event.image} alt={event.title} />
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
                      {new Date(event.date).toLocaleDateString('en-US', {
                        month: 'short',
                      })}
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
                <div className="past-event-image">
                  <img src={event.image} alt={event.title} />
                  <div className="past-event-overlay">
                    <span className="past-label">Past Event</span>
                  </div>
                </div>
                <div className="past-event-info">
                  <h3>{event.title}</h3>
                  <p className="past-event-date">{formatDate(event.date)}</p>
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
        <section className="socials-section">
          <div className="socials-content">
            <h2>Stay Updated</h2>
            <p>
              Stay in touch and follow our updates on social media.
            </p>
            <div className="socials-icons">
              <a href="https://discord.gg/yourserver" target="_blank" rel="noopener noreferrer">
                <img src={discordIcon} alt="Discord" />
              </a>
              <a href="https://www.instagram.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com/yourpage" target="_blank" rel="noopener noreferrer">
                <img src={facebookIcon} alt="Facebook" />
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
