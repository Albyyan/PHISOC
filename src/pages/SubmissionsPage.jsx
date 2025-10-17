import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import MarkdownEditor from '../components/MarkdownEditor';
import '../styles/submissions.css';

const topics = [
  'Metaphysics',
  'Epistemology',
  'Ethics',
  'Aesthetics',
  'Logic'
];

export default function SubmissionsPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    date: new Date().toISOString().split('T')[0],
    topic: '',
    content: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleContentChange = (value) => {
    setFormData(prev => ({
      ...prev,
      content: value
    }));
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!formData.title || !formData.author || !formData.topic || !formData.content) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all required fields' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const slug = generateSlug(formData.title);
      
      // Prepare data for Google Sheets
      const submissionData = {
        Title: formData.title,
        Author: formData.author,
        Slug: slug,
        Topic: formData.topic,
        Content_MD: formData.content,
        Date_Written: formData.date
      };

      // Call your backend API or Google Apps Script Web App
      // Replace this URL with your actual Google Apps Script Web App URL
      const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwYlRNg0HCGXaDYFYPQEFQqK2D6VzIw5Sa951TZrIe3r-4wk3Uw7j7QwIeTsM3UDIXG/exec';
      
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Required for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(submissionData)
      });

      // Note: With no-cors, we won't get response data
      // Assume success if no error is thrown
      setSubmitStatus({ 
        type: 'success', 
        message: 'Your submission has been received! We\'ll review it shortly.' 
      });
      
      // Reset form
      setFormData({
        title: '',
        author: '',
        date: new Date().toISOString().split('T')[0],
        topic: '',
        content: ''
      });

      // Redirect after 2 seconds
      setTimeout(() => {
        navigate('/main');
      }, 2000);

    } catch (error) {
      console.error('Submission error:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: 'Something went wrong. Please try again.' 
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="submissions-page">
      <NavBar />
      
      <div className="submissions-container">
        <div className="submissions-header">
          <h1>Submit Your Work</h1>
          <p>
            Share your philosophical insights with the UNSW community. 
            All submissions will be reviewed before publication.
          </p>
        </div>

        <form className="submission-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">
              Title <span className="required">*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              placeholder="Enter your submission title"
              required
            />
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="author">
                Author <span className="required">*</span>
              </label>
              <input
                type="text"
                id="author"
                name="author"
                value={formData.author}
                onChange={handleInputChange}
                placeholder="Your name"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="date">
                Date Written <span className="required">*</span>
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="topic">
              Topic <span className="required">*</span>
            </label>
            <select
              id="topic"
              name="topic"
              value={formData.topic}
              onChange={handleInputChange}
              required
            >
              <option value="">Select a topic</option>
              {topics.map(topic => (
                <option key={topic} value={topic}>
                  {topic}
                </option>
              ))}
            </select>
          </div>

          <div className="form-group full-width">
            <label htmlFor="content">
              Full Submission (Markdown) <span className="required">*</span>
            </label>
            <MarkdownEditor
              value={formData.content}
              onChange={handleContentChange}
            />
          </div>

          {submitStatus && (
            <div className={`submit-status ${submitStatus.type}`}>
              {submitStatus.message}
            </div>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate('/main')}
              disabled={isSubmitting}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-primary"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Submitting...' : 'Submit for Review'}
            </button>
          </div>
        </form>
      </div>

      <Footer />
    </div>
  );
}