const SUPABASE_URL = `${process.env.NEXT_PUBLIC_SUPABASE_URL}/graphql/v1`;

const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

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
