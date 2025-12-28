const SUPABASE_URL = "https://fdcbfpluwrpocesaxizq.supabase.co/graphql/v1";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZkY2JmcGx1d3Jwb2Nlc2F4aXpxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjY1NzIwMDQsImV4cCI6MjA4MjE0ODAwNH0.16HJQmWAYXrnCThY9n_qQSzF48hBwSFQjSil0mj1uOM";

export async function fetchBlogs() {
  const res = await fetch(SUPABASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      apikey: SUPABASE_ANON_KEY,
      Authorization: `Bearer ${SUPABASE_ANON_KEY}`,
    },
    body: JSON.stringify({
      query: `
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
      `,
    }),
  });

  const json = await res.json();

  return json.data.blogsCollection.edges.map(
    (edge: any) => edge.node
  );
}
