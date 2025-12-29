# Dev Blog

## Project Overview

**Project Name:** Dev Blog  
**Purpose:** A developer-focused blog platform built with Next.js and Supabase using GraphQL. Users can read blogs publicly and log in to create their own posts. Authentication ensures only registered users can access certain features.

---

## Features

- **Authentication:** Email/password login managed via Supabase Auth. Logged-in users can create blogs, while others are prompted to log in.  
- **Protected Create Blog Page:** Only accessible to authenticated users. Non-authenticated users see a message: *"Please login to continue"* when trying to access the page.  
- **GraphQL Data Fetching:** Blogs are fetched from Supabase using GraphQL queries for listing on the home page.  
- **Navbar Behavior:** Displays login button when not logged in and shows the user's email when logged in. The "Create Blog" button is conditionally enabled based on user authentication.  

---

## Local Setup

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <project-folder>

2. **Install dependencies:**

```bash
npm install


3. **Environment Variables:**

Create a .env.local file in the root of the project with the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key


Replace with your Supabase project URL and anon key.

4. **Run locally:**

```bash
npm run dev


Open http://localhost:3000 in your browser.
