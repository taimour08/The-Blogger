"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchBlogs } from "@/lib/fetchBlogs";
import "./fullblog.css";

type Blog = {
  id: number;
  title: string;
  auth: string;
  date: string;
  description: string;
};

export default function SingleBlogPage() {
  const { id } = useParams();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadBlog() {
      const blogs = await fetchBlogs();
      const found = blogs.find((b: Blog) => b.id === Number(id));
      setBlog(found || null);
      setLoading(false);
    }

    loadBlog();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!blog) {
    return (
      <div className="not-found">
        <h1>Blog Not Found</h1>
        <p>The blog you're looking for doesn't exist.</p>
      </div>
    );
  }

  return (
    <div className="single-blog-container">
      {/* Blog Header */}
      <div className="blog-header">
        <h1 className="blog-title">{blog.title}</h1>
        <div className="blog-meta">
          <span className="blog-author">By {blog.auth}</span>
          <span className="blog-date"> | Published on {blog.date}</span>
        </div>
      </div>

      {/* Blog Content */}
      <div className="blog-content">
        <p className="blog-description">{blog.description}</p>
      </div>

      {/* Navigation */}
      <div className="blog-navigation">
        <Link href="/blogs" className="back-link">
          ← Back to All Blogs
        </Link>
      </div>
    </div>
  );
}
