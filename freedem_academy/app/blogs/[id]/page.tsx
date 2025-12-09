

import Footer from "../../../components/shared/Footer";
import { ArrowLeft, Calendar, User } from "lucide-react";
import Link from "next/link";
import blogsData from "../../../data/blogs.json";

export default async function BlogDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = blogsData.find(b => b.id === id);

  if (!blog) {
    return (
       <main className="min-h-screen bg-[#0B0B0D] flex items-center justify-center text-white">
         <div>Article not found</div>
       </main>
    )
  }

  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      
      {/* Article Header */}
      <div className="relative h-[60vh] w-full flex items-center justify-center">
         <div 
           className="absolute inset-0 bg-cover bg-center"
           style={{ backgroundImage: `url(${blog.image})` }} 
         />
         <div className="absolute inset-0 bg-black/70" />
         <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
             <div className="flex justify-center items-center gap-6 text-gray-300 mb-6 text-sm uppercase tracking-widest">
                 <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-primary" />
                    {new Date(blog.date).toLocaleDateString()}
                 </div>
                 <div className="flex items-center">
                    <User className="w-4 h-4 mr-2 text-primary" />
                    {blog.author}
                 </div>
             </div>
             <h1 className="text-4xl md:text-6xl font-black text-white uppercase mb-6 leading-tight">
               {blog.title}
             </h1>
         </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 py-20">
         <Link href="/blogs" className="inline-flex items-center text-primary font-bold uppercase tracking-wider mb-12 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" /> Back to News
         </Link>
         
         <div className="prose prose-invert prose-lg max-w-none">
            <p className="lead text-xl text-gray-300 mb-8">{blog.excerpt}</p>
            <div className="text-gray-400 leading-8 space-y-6">
               {/* Simulating rich text content */}
               <p>{blog.content}</p>
               <p>
                 Cricket is more than just a game; it's a test of character. At Freedem Academy, we believe in holistic development.
                 Whether it's mastering the perfect cover drive or learning to handle the pressure of a final over, our coaches are here to guide you.
               </p>
               <h3>Key Takeaways</h3>
               <ul className="list-disc pl-5 space-y-2">
                 <li>Focus on technique before power.</li>
                 <li>Mental discipline is as important as physical fitness.</li>
                 <li>Consistent practice beats talent when talent doesn't work hard.</li>
               </ul>
            </div>
         </div>
      </div>
      
      <Footer />
    </main>
  );
}
