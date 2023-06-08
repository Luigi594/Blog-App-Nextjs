import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

async function useFetchPosts() {
  const query = groq`
  *[_type=='post']{
    ...,
    author->,
    categories[]->
  } | order(_createdAt desc)
`;

  const posts = await client.fetch(query);

  return { posts };
}

export default useFetchPosts;
