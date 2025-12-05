
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1">
            <Link href="/" className="text-2xl font-bold tracking-widest text-white uppercase italic block mb-4">
              FREDEM <span className="text-primary">ACADEMY</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Forging the future legends of cricket with passion, discipline, and expert coaching. Join the revolution.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/services" className="hover:text-white transition-colors">Training Programs</Link></li>
              <li><Link href="/events" className="hover:text-white transition-colors">Events & Camps</Link></li>
              <li><Link href="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>123 Cricket Avenue, Sports City</li>
              <li>+1 (555) 123-4567</li>
              <li>info@freedemacademy.com</li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Facebook size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Instagram size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Twitter size={24} /></a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm text-gray-600">
          &copy; {new Date().getFullYear()} Freedem Cricket Academy. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
