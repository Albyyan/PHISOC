import React, { useState } from 'react';

export default function MarkdownEditor({ value, onChange }) {
  const [showPreview, setShowPreview] = useState(false);

  const handleTextChange = (e) => {
    onChange(e.target.value);
  };

  // Simple markdown to HTML converter for preview
  const renderMarkdown = (text) => {
    if (!text) return '';
    
    let html = text;
    
    // Headers
    html = html.replace(/^### (.*$)/gim, '<h3>$1</h3>');
    html = html.replace(/^## (.*$)/gim, '<h2>$1</h2>');
    html = html.replace(/^# (.*$)/gim, '<h1>$1</h1>');
    
    // Bold
    html = html.replace(/\*\*(.*?)\*\*/gim, '<strong>$1</strong>');
    
    // Italic
    html = html.replace(/\*(.*?)\*/gim, '<em>$1</em>');
    
    // Links
    html = html.replace(/\[(.*?)\]\((.*?)\)/gim, '<a href="$2">$1</a>');
    
    // Line breaks
    html = html.replace(/\n/gim, '<br>');
    
    return html;
  };

  return (
    <div className="markdown-editor">
      <div className="editor-toolbar">
        <button
          type="button"
          className={`toolbar-btn ${!showPreview ? 'active' : ''}`}
          onClick={() => setShowPreview(false)}
        >
          Write
        </button>
        <button
          type="button"
          className={`toolbar-btn ${showPreview ? 'active' : ''}`}
          onClick={() => setShowPreview(true)}
        >
          Preview
        </button>
        <div className="toolbar-help">
          Supports Markdown formatting
        </div>
      </div>

      {!showPreview ? (
        <textarea
          className="editor-textarea"
          value={value}
          onChange={handleTextChange}
          placeholder="Write your submission here using Markdown...

# Example Header
## Subheader

**Bold text** and *italic text*

- Bullet points
- Are supported

[Links](https://example.com) work too!"
          rows={20}
        />
      ) : (
        <div 
          className="editor-preview"
          dangerouslySetInnerHTML={{ __html: renderMarkdown(value) }}
        />
      )}

      <div className="editor-footer">
        <span className="char-count">
          {value.length} characters
        </span>
      </div>
    </div>
  );
}