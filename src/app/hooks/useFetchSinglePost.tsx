import { groq } from "next-sanity";
import { client } from "../lib/sanity.client";

async function useFetchSinglePost(slug: string) {
  const query = groq`
    *[_type=="post" && slug.current == $slug]{
        ...,
        author->,
        categories[]->
    }[0]
    `;

  const post: Posts = await client.fetch(query, { slug });

  return { post };
}

export default useFetchSinglePost;
