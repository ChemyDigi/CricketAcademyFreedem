
import Link from "next/link";
import { Calendar, User } from "lucide-react";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

export default function BlogCard({ id, title, excerpt, date, author, image }: BlogCardProps) {
  return (
    <div className="group flex flex-col bg-[#121214] border border-white/5 rounded-lg overflow-hidden hover:border-primary/50 transition-all duration-300">
      <div className="relative h-48 overflow-hidden">
        <div 
           className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
           style={{ backgroundImage: `url(${image})` }}
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
      </div>
      
      <div className="p-6 flex-1 flex flex-col">
        <div className="flex items-center text-xs text-gray-500 mb-4 space-x-4">
          <div className="flex items-center">
             <Calendar className="w-3 h-3 mr-1" />
             {new Date(date).toLocaleDateString()}
          </div>
          <div className="flex items-center">
             <User className="w-3 h-3 mr-1" />
             {author}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-white uppercase mb-3 line-clamp-2 group-hover:text-primary transition-colors">
          <Link href={`/blogs/${id}`}>
            {title}
          </Link>
        </h3>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
        
        <div className="mt-auto">
           <Link href={`/blogs/${id}`} className="text-primary text-xs font-bold uppercase tracking-widest hover:text-white transition-colors">
             Read Full Story
           </Link>
        </div>
      </div>
    </div>
  );
}
