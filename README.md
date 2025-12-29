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

## Supabase Integration

### 1. GraphQL

Blogs are fetched using the Supabase GraphQL API. Example query:

```graphql
query GetBlogs {
  blogsCollection {
    edges {
      node {
        id
        title
        author
        date
        description
      }
    }
  }
}
```

Use this query (or variations with pagination/filters) to fetch blog listings. Pagination is implemented for large datasets.

### 2. Authentication

- **User creation:** Users are created in the Supabase Dashboard → Auth → Users.
- **Login handling:** The login page (e.g., `LoginPage.tsx`) uses Supabase Auth:

```ts
// example usage in LoginPage.tsx
const { data, error } = await supabase.auth.signInWithPassword({
  email,
  password
});
```

- **Redirect:** Upon successful login, users are redirected to the home page.
- **Navbar:** The Navbar displays the user's email when logged in and a login button otherwise.
- **Protected pages:** The "Create Blog" page is protected — unauthenticated users cannot submit posts and will see *"Please login to continue"*.

### 3. Supabase Client

The Supabase client is managed in `lib/supabase-client.ts`:

```typescript name=lib/supabase-client.ts
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);
```

Make sure the environment variables are set (see Local Setup).

---

## File Highlights

- **Layout (app/layout.tsx)**
  - Tracks authentication state using `supabase.auth.getUser()`.
  - Updates the Navbar dynamically: shows login button or user email.
  - Protects the "Create Blog" link by conditionally rendering it for authenticated users.

- **Create Blog Page (app/createBlog/page.tsx)**
  - A form for submitting new blogs: title, author, date, content.
  - Uses the Supabase client to insert blogs into the `blogs` table.
  - Shows success or error messages on submission.

- **Blog Listing**
  - Blogs are fetched from Supabase via GraphQL queries.
  - Pagination implemented for large datasets.
  - Each blog displays title, author, date, and a truncated description.

---

## Dependencies

- next — Framework for React-based SSR/SSG applications  
- react / react-dom — Frontend library  
- @supabase/supabase-js — Supabase client for auth and database operations  
- GraphQL client / libraries — For querying Supabase GraphQL API (included or add your preferred GraphQL client)

---

## Notes & Recommendations

- **RLS (Row Level Security):** RLS is enabled on the `blogs` table. Ensure you have a public `SELECT` policy (or appropriate policies) if you want to allow fetching blogs without authentication. Only authenticated users can insert blog data; ensure an RLS INSERT policy is set for the authenticated role.
- **Environment variables:** Must be correctly set. Restart the dev server after updating `.env.local` so the Supabase client picks up the values.
- **Security / Production:**
  - Use secure storage for environment variables in production (e.g., cloud secrets manager).
  - Ensure your site is served over HTTPS in production.
  - Consider tighter RLS policies and using Supabase JWTs for server-side secure operations.
- **Error handling:** Show user-friendly errors for failed auth or insert operations; log details server-side if needed.

---

## How to Use

1. **Navigate to /login** to log in with a registered user.  
2. Once logged in, the Navbar will display the user's email.  
3. Click **Create Blog** to access the blog creation form (requires authentication).  
4. Fill in the blog details and submit; the blog is saved in Supabase.  
5. Go back to the home page to see your blog listed.

---

## Local Setup

1. **Clone the repository:**

```bash
git clone <repository-url>
cd <project-folder>
```

2. **Install dependencies:**

```bash
npm install
```

3. **Environment Variables:**

Create a `.env.local` file in the root of the project with the following:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

Replace with your Supabase project URL and anon key.

4. **Run locally:**

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

---
