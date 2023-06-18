import useFetchPosts from "@/hooks/useFetchPosts";
import CardBlog from "./CardBlog";

async function BlogLists() {
  const { posts } = await useFetchPosts();

  return (
    <div>
      <hr className="border-[#F7AB0A] mb-10" />
      <CardBlog posts={posts} />
    </div>
  );
}

export default BlogLists;
