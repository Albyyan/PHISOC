import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/library.css';

export default function LibraryPage() {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedTopic, setSelectedTopic] = useState('All');

  const topics = ['All', 'Metaphysics', 'Epistemology', 'Ethics', 'Aesthetics', 'Logic'];

  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    try {
      // Replace with your Google Apps Script Web App URL for reading data
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8PwwNwcNiCPUgLqSrgJNhFhkP2ZbO_yZG1IbzaN5iZgBw6VZzD0iIDZfxU1WupNzTHQ/exec';
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();
      
      // Sort by date, newest first
      const sortedData = data.sort((a, b) => 
        new Date(b.Date_Written) - new Date(a.Date_Written)
      );
      
      setSubmissions(sortedData);
      setLoading(false);
    } catch (err) {
      console.error('Error fetching submissions:', err);
      setError('Failed to load submissions. Please try again later.');
      setLoading(false);
    }
  };

// 1) Make getExcerpt robust
const getExcerpt = (markdown = "", maxLength = 200) => {
  // Coerce non-strings (null/undefined/number/etc.) to a safe string
  if (typeof markdown !== "string") markdown = String(markdown ?? "");

  let text = markdown
    .replace(/#{1,6}\s/g, "")        // headers
    .replace(/\*\*/g, "")            // bold
    .replace(/\*/g, "")              // italic
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1") // links
    .replace(/\n/g, " ")
    .trim();

  return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

// 2) Make date formatting safe
const formatDate = (dateString) => {
  if (!dateString) return ""; // nothing to show
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) return dateString; // show raw if unparsable
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
};

  const getTopicColor = (topic) => {
    const colors = {
      'Metaphysics': '#8b7a6a',
      'Epistemology': '#6a7a8b',
      'Ethics': '#7a6a5a',
      'Aesthetics': '#6a5a7a',
      'Logic': '#5a6a7a'
    };
    return colors[topic] || '#C9A78C';
  };

  const filteredSubmissions = selectedTopic === 'All' 
    ? submissions 
    : submissions.filter(s => s.Topic === selectedTopic);

  if (loading) {
    return (
      <div className="library-page">
        <NavBar />
        <div className="library-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading submissions...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="library-page">
        <NavBar />
        <div className="library-container">
          <div className="error-state">
            <p>{error}</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="library-page">
      <NavBar />
      
      <div className="library-container">
        <div className="library-header">
          <h1>Library</h1>
          <p>
            Explore our collection of philosophical writings, essays, and analyses 
            from the UNSW Philosophy Society community.
          </p>
        </div>

        <div className="topic-filter">
          {topics.map(topic => (
            <button
              key={topic}
              className={`topic-btn ${selectedTopic === topic ? 'active' : ''}`}
              onClick={() => setSelectedTopic(topic)}
            >
              {topic}
            </button>
          ))}
        </div>

        <div className="submissions-count">
          {filteredSubmissions.length} {filteredSubmissions.length === 1 ? 'submission' : 'submissions'}
        </div>

        <div className="submissions-list">
          {filteredSubmissions.map((submission, index) => (
            <article key={submission.Slug} className="submission-card">
              <div className="card-decoration" style={{ 
                background: `linear-gradient(135deg, ${getTopicColor(submission.Topic)} 0%, transparent 100%)` 
              }} />
              
              <div className="card-header">
                <span 
                  className="topic-badge" 
                  style={{ backgroundColor: getTopicColor(submission.Topic) }}
                >
                  {submission.Topic}
                </span>
                <span className="card-date">{formatDate(submission.Date_Written)}</span>
              </div>

              <h2 className="card-title">{submission.Title}</h2>
              
              <p className="card-author">by {submission.Author}</p>
              
              <p className="card-excerpt">{getExcerpt(submission.Content)}</p>
              
              <Link 
                to={`/library/${submission.Slug}`} 
                className="read-more-btn"
              >
                Read More
                <span className="arrow">→</span>
              </Link>

              <div className="card-number">
                {String(index + 1).padStart(2, '0')}
              </div>
            </article>
          ))}
        </div>

        {filteredSubmissions.length === 0 && (
          <div className="empty-state">
            <p>No submissions found for this topic.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}