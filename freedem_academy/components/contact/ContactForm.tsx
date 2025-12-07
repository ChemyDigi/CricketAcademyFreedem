
export default function ContactForm() {
    return (
      <div className="bg-[#121214] p-8 md:p-12 rounded-lg border border-white/5">
        <h3 className="text-2xl font-bold text-white uppercase mb-6">Get In Touch</h3>
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-400 mb-2 uppercase">First Name</label>
              <input 
                  type="text" 
                  id="firstName"
                  className="w-full bg-[#0B0B0D] border border-white/10 text-white p-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="John"
              />
            </div>
            <div>
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-400 mb-2 uppercase">Last Name</label>
              <input 
                  type="text" 
                  id="lastName"
                  className="w-full bg-[#0B0B0D] border border-white/10 text-white p-3 focus:outline-none focus:border-primary transition-colors"
                  placeholder="Doe"
              />
            </div>
          </div>
  
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2 uppercase">Email Address</label>
            <input 
                type="email" 
                id="email"
                className="w-full bg-[#0B0B0D] border border-white/10 text-white p-3 focus:outline-none focus:border-primary transition-colors"
                placeholder="john@example.com"
            />
          </div>
  
          <div>
             <label htmlFor="program" className="block text-sm font-medium text-gray-400 mb-2 uppercase">Interested Program</label>
             <select 
                id="program"
                className="w-full bg-[#0B0B0D] border border-white/10 text-white p-3 focus:outline-none focus:border-primary transition-colors"
             >
                <option>Personal Coaching</option>
                <option>Group Training</option>
                <option>Summer Camp</option>
                <option>Others</option>
             </select>
          </div>
  
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2 uppercase">Message</label>
            <textarea 
               id="message"
               rows={4}
               className="w-full bg-[#0B0B0D] border border-white/10 text-white p-3 focus:outline-none focus:border-primary transition-colors"
               placeholder="How can we help you?"
            ></textarea>
          </div>
  
          <button type="submit" className="w-full bg-primary text-white font-bold uppercase py-4 tracking-widest hover:bg-red-700 transition-colors">
            Send Message
          </button>
        </form>
      </div>
    );
  }
