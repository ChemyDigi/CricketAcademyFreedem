
export default function GoogleMapEmbed() {
    return (
      <div className="w-full h-96 bg-[#121214] border border-white/5 rounded-lg overflow-hidden relative">
         {/* Placeholder for iframe */}
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1804.4279416415013!2d55.31575423408661!3d25.24177859557028!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5d0068987d61%3A0xeff559194beba64c!2sFreedem%20Cricket%20Academy!5e0!3m2!1sen!2slk!4v1765172251772!5m2!1sen!2slk"
           width="100%" 
           height="100%" 
           style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }} 
           allowFullScreen={false} 
           loading="lazy"
           title="Freedem Academy Location"
         ></iframe>
      </div>
    );
  }
