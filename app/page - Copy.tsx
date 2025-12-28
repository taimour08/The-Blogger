export default function Home() {
  const blogs = [
    {
      title: "Understanding Next.js App Router",
      author: "John Doe",
      description:
        "Next.js App Router introduces a modern way to build React applications with better performance and scalability. It is based on React Server Components, which allow developers to render components on the server by default. This reduces the amount of JavaScript sent to the browser and improves page load times. The App Router also provides powerful routing features such as nested layouts, route groups, and dynamic segments. These features make it easier to structure large applications while keeping the codebase clean. For blog applications, the App Router is especially useful because it allows you to fetch data on the server, handle loading and error states gracefully, and improve SEO. Overall, learning the App Router is essential for anyone building modern web apps with Next.js.",
    },
    {
      title: "Why TypeScript Matters in Web Development",
      author: "Jane Smith",
      description:
        "TypeScript is a superset of JavaScript that adds static typing to the language. This helps developers catch errors early during development instead of at runtime. In large applications, TypeScript makes code easier to understand, refactor, and maintain. It also provides excellent editor support such as autocomplete and inline documentation. When used with frameworks like Next.js and tools like Apollo Client, TypeScript ensures type safety across the entire application, from frontend components to API responses. For blog apps, TypeScript helps define clear data models for posts, authors, and comments, reducing bugs and improving developer confidence.",
    },
    {
      title: "Building a Simple Blog with Supabase",
      author: "Alex Johnson",
      description:
        "Supabase is an open-source backend-as-a-service that provides a PostgreSQL database, authentication, and instant APIs. It is a great choice for building blog applications because it removes much of the backend complexity. With Supabase, you can store blog posts, authors, and comments in a database and access them using REST or GraphQL. When combined with Next.js, Supabase enables fast server-side rendering and static generation. This improves SEO and performance for blog sites. Supabase also includes built-in authentication, making it easy to add features like author logins or admin dashboards. Overall, it is a powerful and developer-friendly backend solution.",
    },
  ];

  return (


<div style={{ padding: "2rem" }}>




      <h1>Blogs</h1>

      {blogs.map((blog, index) => (
        <div key={index} style={{ marginBottom: "2rem" }}>
          <h2>{blog.title}</h2>
          <p><strong>Author:</strong> {blog.author}</p>
          <p>{blog.description}</p>
        </div>
      ))}
    </div>
  );
}
