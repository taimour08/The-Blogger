// app/page.tsx
"use client";

import Link from 'next/link';
import './globals.css';

export default function HomePage() {
  return (
    <div className="home-container">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to DevBlog</h1>
        <p className="hero-subtitle">
          Explore insightful articles about web development, React, Next.js, and modern technologies.
          Join our community of developers and share your knowledge.
        </p>
        
        <div className="cta-buttons">
          <Link href="/blogs" className="primary-button">
            Explore Blogs
          </Link>
          <Link href="/createBlog" className="secondary-button">
            Write Your Own
          </Link>
        </div>
      </div>

      <div className="features-section">
        <div className="feature-card">
          <h3>📚 Learn</h3>
          <p>Detailed tutorials and guides on modern web technologies</p>
        </div>
        <div className="feature-card">
          <h3>💡 Share</h3>
          <p>Contribute your knowledge and help others grow</p>
        </div>
        <div className="feature-card">
          <h3>🚀 Build</h3>
          <p>Practical projects you can implement immediately</p>
        </div>
      </div>

      <div className="recent-preview">
        <h2>Recently Published</h2>
        <div className="preview-card">
          <h3>Understanding Next.js App Router</h3>
          <p>A comprehensive guide to the new App Router in Next.js 14...</p>
          <Link href="/blogs/1">Read More →</Link>
        </div>
      </div>
    </div>
  );
}