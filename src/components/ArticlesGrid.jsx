import React from 'react';

const articles = [
  {
    id: 1,
    category: 'Philosophy',
    title: 'The Ethics of Artificial Intelligence',
    description: 'Exploring the moral implications of machine consciousness and decision-making in an increasingly automated world.',
    readTime: '5 min read',
    gradient: 'linear-gradient(135deg, #6a7f92 0%, #a8b5c4 100%)'
  },
  {
    id: 2,
    category: 'Literature',
    title: 'Postmodern Narratives in Contemporary Fiction',
    description: 'An examination of fragmented storytelling and the death of the author in 21st century literature.',
    readTime: '7 min read',
    gradient: 'linear-gradient(135deg, #8a7a6a 0%, #b5a590 100%)'
  },
  {
    id: 3,
    category: 'Ethics',
    title: 'Moral Relativism in a Globalized World',
    description: 'Can universal ethical principles exist when cultures clash? A deep dive into contemporary moral philosophy.',
    readTime: '6 min read',
    gradient: 'linear-gradient(135deg, #6b5a4d 0%, #998a7a 100%)'
  },
  {
    id: 4,
    category: 'Poetry',
    title: 'Voices from the Margins',
    description: 'A collection of poems exploring identity, displacement, and the search for belonging in modern Australia.',
    readTime: '3 min read',
    gradient: 'linear-gradient(135deg, #5a6a7a 0%, #8a9aaa 100%)'
  },
  {
    id: 5,
    category: 'Culture',
    title: 'Indigenous Knowledge Systems',
    description: 'Reconciling traditional wisdom with Western philosophical frameworks in contemporary discourse.',
    readTime: '8 min read',
    gradient: 'linear-gradient(135deg, #7a6a5a 0%, #aa9a8a 100%)'
  },
  {
    id: 6,
    category: 'Academia',
    title: 'The Future of Philosophical Inquiry',
    description: 'How interdisciplinary approaches are reshaping traditional philosophical methodologies in the university.',
    readTime: '9 min read',
    gradient: 'linear-gradient(135deg, #6a5a7a 0%, #9a8aaa 100%)'
  }
];

function ArticleCard({ article }) {
  const handleClick = () => {
    alert('Article page would open here');
  };

  return (
    <div className="article-card" onClick={handleClick}>
      <div className="article-image" style={{ background: article.gradient }}>
        <div className="article-category">{article.category}</div>
        <div className="texture-overlay" />
      </div>
      
      <div className="article-content">
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <div className="article-meta">{article.readTime}</div>
      </div>
    </div>
  );
}

export default function ArticlesGrid() {
  return (
    <section className="more-issues" id="issues">
      <div className="section-header">
        <h2>More Issues</h2>
      </div>
      
      <div className="articles-grid">
        {articles.map((article) => (
          <ArticleCard key={article.id} article={article} />
        ))}
      </div>
    </section>
  );
}