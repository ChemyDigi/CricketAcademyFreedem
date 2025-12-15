"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
// import { getBlogs, Blog } from "@/lib/firebaseService";
import blogsData from "@/data/blogs.json";

export default function BlogsGrid() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setBlogs(blogsData);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <section className="py-20 bg-[#0B0B0D]">
        <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-96 bg-gray-800 animate-pulse rounded-lg"></div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              excerpt={blog.excerpt}
              date={blog.date}
              author={blog.author}
              image={blog.image}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
