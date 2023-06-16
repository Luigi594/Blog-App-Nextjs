import BlogLists from "../components/BlogLists";
import useFetchPosts from "../hooks/useFetchPosts";

export default async function Home() {
  const { posts } = await useFetchPosts();

  return (
    <main>
      <BlogLists posts={posts} />
    </main>
  );
}
