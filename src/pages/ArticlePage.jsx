import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import '../styles/article.css';

export default function ArticlePage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchArticle();
  }, [slug]);

  const fetchArticle = async () => {
    try {
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycby8PwwNwcNiCPUgLqSrgJNhFhkP2ZbO_yZG1IbzaN5iZgBw6VZzD0iIDZfxU1WupNzTHQ/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL);
      const data = await response.json();
      
      const foundArticle = data.find(item => item.Slug === slug);
      
      if (foundArticle) {
        setArticle(foundArticle);
      } else {
        setError('Article not found');
      }
      
      setLoading(false);
    } catch (err) {
      console.error('Error fetching article:', err);
      setError('Failed to load article. Please try again later.');
      setLoading(false);
    }
  };

    // 1) Safe Markdown renderer
    const renderMarkdown = (markdown = "") => {
    if (typeof markdown !== "string") return "";

    let html = markdown;

    // Headers
    html = html.replace(/^### (.*$)/gim, "<h3>$1</h3>");
    html = html.replace(/^## (.*$)/gim, "<h2>$1</h2>");
    html = html.replace(/^# (.*$)/gim, "<h1>$1</h1>");

    // Bold / Italic / Links
    html = html.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>");
    html = html.replace(/\*(.*?)\*/gim, "<em>$1</em>");
    html = html.replace(
        /\[(.*?)\]\((.*?)\)/gim,
        '<a href="$2" target="_blank" rel="noopener">$1</a>'
    );

    // Blockquotes & Code
    html = html.replace(/^> (.*$)/gim, "<blockquote>$1</blockquote>");
    html = html.replace(/```(.*?)```/gis, "<pre><code>$1</code></pre>");
    html = html.replace(/`(.*?)`/gim, "<code>$1</code>");

    // Paragraphs & line breaks
    html = html
        .split("\n\n")
        .map((para) =>
        !para.startsWith("<") && para.trim() ? `<p>${para}</p>` : para
        )
        .join("\n");

    html = html.replace(/\n/gim, "<br>");
    return html;
    };

    // 2) Safe date formatting
    const formatDate = (dateString) => {
    if (!dateString) return "";
    const date = new Date(dateString);
    if (Number.isNaN(date.getTime())) return dateString;
    return date.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
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

    // 3) Safe read-time estimator
    const estimateReadTime = (text = "") => {
    if (typeof text !== "string") text = String(text ?? "");
    const words = text.trim() ? text.split(/\s+/).length : 0;
    const minutes = Math.max(1, Math.ceil(words / 200)); // minimum 1 min
    return `${minutes} min read`;
    };

  if (loading) {
    return (
      <div className="article-page">
        <NavBar />
        <div className="article-container">
          <div className="loading-state">
            <div className="loading-spinner"></div>
            <p>Loading article...</p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (error || !article) {
    return (
      <div className="article-page">
        <NavBar />
        <div className="article-container">
          <div className="error-state">
            <p>{error || 'Article not found'}</p>
            <Link to="/library" className="back-btn">Back to Library</Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="article-page">
      <NavBar />
      
      <article className="article-container">
        <div className="article-back">
          <Link to="/library" className="back-link">
            ← Back to Library
          </Link>
        </div>

        <header className="article-header">
          <div 
            className="topic-badge-large" 
            style={{ 
              backgroundColor: getTopicColor(article.Topic),
              boxShadow: `0 0 30px ${getTopicColor(article.Topic)}40`
            }}
          >
            {article.Topic}
          </div>
          
          <h1 className="article-title">{article.Title}</h1>
          
          <div className="article-meta">
            <span className="author">by {article.Author}</span>
            <span className="separator">•</span>
            <span className="date">{formatDate(article.Date_Written)}</span>
            <span className="separator">•</span>
            <span className="read-time">{estimateReadTime(article.Content)}</span>
          </div>

          <div 
            className="decorative-line" 
            style={{ background: getTopicColor(article.Topic) }}
          />
        </header>

        <div 
          className="article-content"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(article.Content) }}
        />

        <footer className="article-footer">
          <div 
            className="decorative-line" 
            style={{ background: getTopicColor(article.Topic) }}
          />
          
          <div className="article-footer-content">
            <div className="footer-author">
              <span className="footer-label">Written by</span>
              <span className="footer-name">{article.Author}</span>
            </div>
            
            <Link to="/library" className="back-to-library">
              View More Articles →
            </Link>
          </div>
        </footer>
      </article>

      <Footer />
    </div>
  );
}