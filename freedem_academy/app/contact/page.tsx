

import HeroSection from "../../components/shared/HeroSection";
import Footer from "../../components/shared/Footer";
import ContactForm from "../../components/contact/ContactForm";
import FAQAccordion from "../../components/contact/FAQAccordion";
import GoogleMapEmbed from "../../components/contact/GoogleMapEmbed";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#0B0B0D]">

      <HeroSection 
        title="Contact Us" 
        subtitle="We'd love to hear from you. Reach out for enrollments or queries."
        backgroundImage="/contact/hero_image.png"
      />
      
      <section className="py-20 bg-[#0B0B0D]">
         <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
               <div className="bg-[#121214] p-8 text-center border border-white/5 rounded-lg group hover:border-primary transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                     <Phone className="text-primary w-8 h-8 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">Call Us</h3>
                  <p className="text-gray-400">+971 58 208 6656</p>
               </div>
               <div className="bg-[#121214] p-8 text-center border border-white/5 rounded-lg group hover:border-primary transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                     <Mail className="text-primary w-8 h-8 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">Email Us</h3>
                  <p className="text-gray-400">Freedem.academy@gmail.com</p>
               </div>
               <div className="bg-[#121214] p-8 text-center border border-white/5 rounded-lg group hover:border-primary transition-colors">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition-colors">
                     <MapPin className="text-primary w-8 h-8 group-hover:text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white uppercase mb-2">Visit Us</h3>
                  <p className="text-gray-400">Oud Metha Road,<br />
                  Oud Metha,<br /> Umm Hurair Second, <br /> Dubai,<br /> United Arab Emirates</p>
               </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
               <ContactForm />
               <div className="space-y-12">
                  <GoogleMapEmbed />
                  <FAQAccordion />
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
