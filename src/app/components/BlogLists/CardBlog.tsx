import Image from "next/image";
import urlFor from "@/lib/urlFor";
import { TruncateText } from "@/lib/truncate-text";
import ArrowUpRightIcon from "../ArrowUpRightIcon";
import ClientSideRoute from "../ClientSideRoute";

type BlogProps = {
  posts: Posts[];
};

function CardBlog({ posts }: BlogProps) {
  return (
    <div className="grid grid-cols 1 px-10 gap-10 gap-y-16 pb-24 md:grid-cols-2">
      {posts.map((post: Posts) => (
        <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>
          <div className="flex flex-col group cursor-pointer">
            <div
              className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 
            transition-transform duration-200 ease-out">
              <Image
                className="object-cover rounded-md"
                src={urlFor(post.mainImage).url()}
                alt={post.author.name}
                fill
              />
            </div>

            <div className="mt-5 flex-1">
              <p className="underline text-lg font-bold">{post.title}</p>
              <p className="text-gray-500">
                {TruncateText(post.description, 100)}
              </p>
            </div>

            <p className="flex items-center group-hover:underline mt-5 font-bold">
              Read Post
              <ArrowUpRightIcon />
            </p>
          </div>
        </ClientSideRoute>
      ))}
    </div>
  );
}

export default CardBlog;
