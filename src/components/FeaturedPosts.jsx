import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { getFeaturedPosts } from "../services/api";

export default function FeaturedPosts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getFeaturedPosts().then((data) => {
      setPosts(data.slice(0, 3));
    });
  }, []);

  return (
    <div className="w-full flex flex-col items-center gap-10 py-12">
      <div className="text-center mb-6 md:w-[1050px] w-[348px]">
        <div className="text-blue-500 text-[14px] font-bold mb-2">
          Practice Advice
        </div>
        <h2 className="text-[40px] font-bold text-primary mb-4">
          Featured Posts
        </h2>
        <p className="text-gray-500 text-[14px] font-normal mx-auto">
          Problems trying to resolve the conflict between the two major realms
          of Classical physics: Newtonian mechanics
        </p>
      </div>
      <div className="flex flex-col md:flex-row w-[1050px] justify-between gap-4 md:gap-0">
        {posts.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
}
