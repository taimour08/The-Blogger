"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/fetchBlogs";
import "./bloglist.css";

type Blog = {
  id: number;
  title: string;
  auth: string;
  date: string;
  description: string;
};

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 5;

  useEffect(() => {
    async function loadBlogs() {
      const data = await fetchBlogs();
      setBlogs(data);
    }

    loadBlogs();
  }, []);

  // Pagination logic
  const totalPages = Math.ceil(blogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const currentBlogs = blogs.slice(startIndex, startIndex + blogsPerPage);

  return (
    <div className="page-container">
      <h1 className="page-title">All Blogs</h1>

      <div className="blogs-container">
        {currentBlogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <h2 className="blog-title">{blog.title}</h2>

            <div className="blog-meta">
              <span className="blog-author">By {blog.auth}</span>
              <span className="blog-date">{blog.date}</span>
            </div>

            <p className="blog-description">
              {blog.description.substring(0, 200)}...
            </p>

            <Link href={`/blogs/${blog.id}`} className="read-more-btn">
              Read Full Article →
            </Link>
          </div>
        ))}
      </div>

      {/* Pagination */}
      {blogs.length > 0 && (
        <div className="pagination">
          <button
            className={`pagination-btn ${currentPage === 1 ? "disabled" : ""}`}
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
          >
            ← Previous
          </button>

          <div className="page-numbers">
            Page {currentPage} of {totalPages}
          </div>

          <button
            className={`pagination-btn ${
              currentPage === totalPages ? "disabled" : ""
            }`}
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
          >
            Next →
          </button>
        </div>
      )}
    </div>
  );
}
