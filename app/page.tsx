import { fetchBlogs } from "../lib/fetchBlogs";


type Blog = {
  id: number
  title: string
  author: string
  date: string
  description: string
}

export default async function HomePage() {
  const blogs = await fetchBlogs();

  return (
    <main>
      <h1>Blo Posts</h1>

      {blogs.map((blog: Blog) => (
        <article key={blog.id}>
          <h2>{blog.title}</h2>
          <p>
            By {blog.author} • {blog.date}
          </p>
          <p>{blog.description}</p>
        </article>
      ))}
    </main>
  );
}
