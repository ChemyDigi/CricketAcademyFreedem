
export default function GoogleMapEmbed() {
    return (
      <div className="w-full h-96 bg-[#121214] border border-white/5 rounded-lg overflow-hidden relative">
         {/* Placeholder for iframe */}
         <iframe 
           src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d158858.47340002653!2d-0.24168021029197825!3d51.52855824199923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c7c7eb9be3%3A0x3918653cd8164242!2sLord&#39;s%20Cricket%20Ground!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" 
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
