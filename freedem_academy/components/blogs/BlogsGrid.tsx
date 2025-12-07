
import BlogCard from "./BlogCard";
import blogsData from "../../data/blogs.json";

export default function BlogsGrid() {
  return (
    <section className="py-20 bg-[#0B0B0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogsData.map((blog) => (
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
