"use client";

import { useState } from "react";
import { addEvent, verifyPassword } from "@/app/actions/events";
import { useRouter } from "next/navigation";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setLoginError("");

    try {
      const result = await verifyPassword(password);
      if (result.success) {
        setIsLoggedIn(true);
      } else {
        setLoginError(result.error || "Invalid password");
      }
    } catch (error) {
      setLoginError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const handleAddEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("password", password); // Send password again for server verification

    try {
        const result = await addEvent(formData);
        if (result.success) {
            alert("Event added successfully!");
            (e.target as HTMLFormElement).reset();
            router.refresh();
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("An error occurred while adding the event");
    } finally {
        setLoading(false);
    }
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-[#08080A] flex flex-col md:flex-row">
        {/* Left Side - Branding */}
        <div className="md:w-1/2 bg-[#121214] p-12 flex flex-col justify-center items-center relative overflow-hidden border-b md:border-b-0 md:border-r border-white/5">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent pointer-events-none" />
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-32 h-32 md:w-48 md:h-48 mb-8 relative">
                <img 
                    src="/FreedemLogo.png" 
                    alt="Freedem Academy Logo" 
                    className="w-full h-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
                />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              ADMIN <span className="text-primary">PORTAL</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-md leading-relaxed">
              Manage events, track schedules, and oversee academy operations efficiently.
            </p>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute top-12 right-12 w-32 h-32 bg-white/5 rounded-full blur-2xl" />
        </div>

        {/* Right Side - Login Form */}
        <div className="md:w-1/2 flex items-center justify-center p-8 bg-[#08080A]">
          <div className="w-full max-w-md space-y-8">
            <div className="text-center md:text-left">
              <h2 className="text-2xl font-bold text-white">Welcome Back</h2>
              <p className="text-gray-400 mt-2">Please enter your credentials to access the dashboard.</p>
            </div>

            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300">Password</label>
                <div className="relative">
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full bg-[#121214] border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder-gray-600"
                        placeholder="••••••••"
                    />
                </div>
              </div>

              {loginError && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                    <p className="text-red-500 text-sm text-center font-medium">{loginError}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3.5 rounded-lg transition-all transform active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed shadow-[0_4px_14px_0_rgba(0,0,0,0.39)] hover:shadow-[0_6px_20px_rgba(210,10,10,0.23)]"
              >
                {loading ? (
                    <span className="flex items-center justify-center gap-2">
                        <span className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                        Verifying...
                    </span>
                ) : "Secure Login"}
              </button>

              <div className="text-center">
                <p className="text-xs text-gray-500">
                    Restricted Access. Authorized Personnel Only.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#08080A] py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white">Event Manager</h1>
            <button 
                onClick={() => setIsLoggedIn(false)}
                className="text-gray-400 hover:text-white text-sm"
            >
                Logout
            </button>
        </div>
        
        <div className="bg-[#121214] p-8 rounded-lg border border-white/5">
          <h2 className="text-xl font-bold text-white mb-6 text-primary">Add New Event</h2>
          <form onSubmit={handleAddEvent} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label className="block text-gray-400 text-sm mb-2">Event Title</label>
                <input
                    name="title"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. Annual Sports Day"
                />
                </div>
                <div>
                <label className="block text-gray-400 text-sm mb-2">Date</label>
                <input
                    type="date"
                    name="date"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label className="block text-gray-400 text-sm mb-2">Time</label>
                <input
                    name="time"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="e.g. 09:00 AM - 05:00 PM"
                />
                </div>
                <div>
                <label className="block text-gray-400 text-sm mb-2">Location</label>
                <input
                    name="location"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                    placeholder="Main Ground"
                />
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                <label className="block text-gray-400 text-sm mb-2">Category</label>
                <select
                    name="category"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                >
                    <option value="selection">Selection</option>
                    <option value="ceremony">Ceremony</option>
                    <option value="match">Match</option>
                    <option value="training">Training</option>
                    <option value="social">Social</option>
                    <option value="other">Other</option>
                </select>
                </div>
                <div>
                <label className="block text-gray-400 text-sm mb-2">Status</label>
                <select
                    name="status"
                    required
                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                >
                    <option value="upcoming">Upcoming</option>
                    <option value="past">Past</option>
                    <option value="cancelled">Cancelled</option>
                </select>
                </div>
            </div>

            <div>
              <label className="block text-gray-400 text-sm mb-2">Description</label>
              <textarea
                name="description"
                rows={4}
                required
                className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                placeholder="Event details..."
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
            >
              {loading ? "Adding Event..." : "Add Event"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
