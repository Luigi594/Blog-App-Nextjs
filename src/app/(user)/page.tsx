import BlogLists from "../components/BlogLists";

export const revalidate = 60;

export default async function Home() {
  return (
    <main>
      <BlogLists />
    </main>
  );
}
