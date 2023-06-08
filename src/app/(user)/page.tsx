import useFetchPosts from "../hooks/useFetchPosts";

export default async function Home() {
  const { posts } = await useFetchPosts();

  return <main>Hello there</main>;
}
