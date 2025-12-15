import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 text-center md:text-left place-items-center md:place-items-stretch">
          {/* Brand */}
          <div className="col-span-1 md:col-span-1 flex flex-col items-center md:items-start">
            <img
              src="/FreedemLogoFtr.png"
              alt="Freedem Academy Logo"
              width={160}
              height={50}
              className="mb-4"
            />
            <p className="text-gray-400 text-sm leading-relaxed text-center md:text-justify">
              At Freedom Cricket Academy, we help young players build skill,
              confidence, and teamwork through expert coaching and real-game
              experience
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm text-gray-400 text-center md:text-left">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  Events & Tournaments
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full flex flex-col items-center md:items-start">
            <ul className="space-y-5 text-sm text-gray-400 text-center md:text-left">
              <li>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-primary">
                  Address
                </h3>
                <p>
                  Dubai : English Language School <br />
                  Ajman : The Royal Sports Club <br />
                  Sharjah : Australian International School
                </p>
              </li>

              <li>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-primary">
                  Contact
                </h3>
                <a href="tel:+971582086656" className="hover:text-white transition-colors">
                  +971 58 208 6656
                </a>
              </li>

              <li>
                <h3 className="text-lg font-bold uppercase tracking-wider mb-3 text-primary">
                  Email
                </h3>
                <a
                  href="mailto:Freedem.academy@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  Freedem.academy@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="w-full flex flex-col items-center md:items-start">
            <h3 className="text-lg font-bold uppercase tracking-wider mb-4 text-primary">
              Follow Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://www.facebook.com/p/Freedem-Cricket-Sport-Academy-100047773096052/"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Facebook size={24} />
              </a>
              <a
                href="https://www.instagram.com/freedemuae/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-gray-400 hover:text-primary transition-colors"
              >
                <Instagram size={24} />
              </a>
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
