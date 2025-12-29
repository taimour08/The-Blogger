// app/layout.tsx
"use client";
import './globals.css';
import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase-client";
import Link from "next/link";


export default function RootLayout({ children }: { children: React.ReactNode }) {


  const [user, setUser] = useState<any>(null);

useEffect(() => {
  supabase.auth.getUser().then(
    ({ data }: { data: { user: any } }) => {
      setUser(data.user);
    }
  );
}, []);


  return (
    <html lang="en">
      <body>
        <header>
          <nav className="nav-container">
<h1 className="logo">Dev Blog</h1>

<ul className="nav-links">
  <li><a href="/">Home</a></li>

  <li>
    <a
      href="/createBlog"
      onClick={(e) => {
        if (!user) {
          e.preventDefault();
          alert("Please login to continue");
        }
      }}
    >
      Create Blog
    </a>
  </li>

  {user ? (
    <li className="user-email"> User: {user.email}</li>
  ) : (
    <li>
      <a href="/login">Login</a>
    </li>
  )}
</ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>© {new Date().getFullYear()} My Blog. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}