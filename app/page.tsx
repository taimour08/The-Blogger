"use client"
import { useState } from 'react';
import { blogs } from './blogs-data';

export default function Home() {
  

  const BLOGS_PER_PAGE = 5;
  const [currentPage, setCurrentPage] = useState(1);
  
  // Calculate pagination
  const totalPages = Math.ceil(blogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = blogs.slice(startIndex, startIndex + BLOGS_PER_PAGE);

  // Truncate text to 200 words
  const truncateText = (text: string, wordLimit: number) => {
    const words = text.split(' ');
    if (words.length > wordLimit) {
      return words.slice(0, wordLimit).join(' ') + '...';
    }
    return text;
  };

  return (
    <div className="page-container">
      <h1 className="page-title">Blogs</h1>
      
      <div className="blogs-container">
        {currentBlogs.map((blog, index) => (
          <div key={index} className="blog-card">
            <h2 className="blog-title">{blog.title}</h2>
            <div className="blog-meta">
              <span className="blog-author">By {blog.author}</span>
              <span className="blog-date">{blog.date}</span>
            </div>
            <p className="blog-description">
              {truncateText(blog.description, 200)}
            </p>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        
        <span>Page {currentPage} of {totalPages}</span>
        
        <button 
          onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
}