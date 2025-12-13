
"use client";

import { useState, useEffect } from "react";
import { addEvent, verifyPassword, getEvents, deleteEvent, updateEvent } from "@/app/actions/events";
import { useRouter } from "next/navigation";
import DatePicker from "@/components/ui/DatePicker";
import { 
    LayoutDashboard, 
    CalendarCheck, 
    LogOut, 
    Plus, 
    Trash2, 
    MapPin, 
    Clock, 
    Calendar,
    Type,

    AlignLeft,
    Edit2
} from "lucide-react";

export default function AdminPanel() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [loading, setLoading] = useState(false);
  
  // Dashboard states
  const [activeTab, setActiveTab] = useState("events");
  const [events, setEvents] = useState<any[]>([]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingEvent, setEditingEvent] = useState<any>(null); // Track event being edited
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  // Form states
  const [selectedDate, setSelectedDate] = useState("");

  const router = useRouter();

  useEffect(() => {
    if (isLoggedIn) {
        fetchEvents();
    }
  }, [isLoggedIn, refreshTrigger]);

  const fetchEvents = async () => {
    const data = await getEvents();
    setEvents(data);
  };

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

  const handleAddOrUpdateEvent = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("password", password);

    try {
        let result;
        if (editingEvent) {
             result = await updateEvent(editingEvent.id, formData);
        } else {
             result = await addEvent(formData);
        }

        if (result.success) {
            setShowAddModal(false);
            setEditingEvent(null); // Clear editing state
            setRefreshTrigger(prev => prev + 1);
            setSelectedDate(""); // Reset date
            router.refresh();
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("An error occurred while saving the event");
    } finally {
        setLoading(false);
    }
  };

  const openAddModal = () => {
      setEditingEvent(null);
      setSelectedDate("");
      setShowAddModal(true);
  };

  const openEditModal = (event: any) => {
      setEditingEvent(event);
      setSelectedDate(event.date); // Pre-fill date
      setShowAddModal(true);
  };


  const handleDeleteEvent = async (id: string) => {
    if (!confirm("Are you sure you want to delete this event?")) return;
    
    try {
        const result = await deleteEvent(id);
        if (result.success) {
            setRefreshTrigger(prev => prev + 1);
            router.refresh();
        } else {
            alert("Error: " + result.error);
        }
    } catch (error) {
        alert("Failed to delete event");
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
            </form>
          </div>
        </div>
      </div>
    );
  }

  // Dashboard UI
  return (
    <div className="min-h-screen bg-[#08080A] flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#121214] border-r border-white/5 flex-shrink-0 flex flex-col fixed md:relative h-full z-20">
            <div className="p-6 flex items-center gap-3 border-b border-white/5">
                <img src="/FreedemLogo.png" alt="Logo" className="w-8 h-8 object-contain" />
                <span className="font-bold text-white tracking-wide">ADMIN PANEL</span>
            </div>
            
            <nav className="flex-1 p-4 space-y-2">
                <button 
                    onClick={() => setActiveTab("events")}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                        activeTab === "events" 
                        ? "bg-primary/10 text-primary" 
                        : "text-gray-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                    <CalendarCheck size={18} />
                    Event Management
                </button>
                {/* Future nav items can go here */}
            </nav>

            <div className="p-4 border-t border-white/5">
                <button 
                    onClick={() => setIsLoggedIn(false)}
                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-400 hover:bg-red-500/10 transition-colors"
                >
                    <LogOut size={18} />
                    Logout
                </button>
            </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-screen overflow-hidden">
            {/* Header */}
            <header className="h-16 bg-[#121214]/50 backdrop-blur border-b border-white/5 flex items-center justify-between px-8">
                <h2 className="text-xl font-bold text-white">
                    {activeTab === "events" ? "Event Management" : "Dashboard"}
                </h2>
                <div className="text-sm text-gray-400">
                    Welcome, <span className="text-white font-medium">Admin</span>
                </div>
            </header>

            {/* Content Area */}
            <main className="flex-1 overflow-y-auto p-8">
                {activeTab === "events" && (
                    <div className="space-y-6">
                        <div className="flex justify-between items-center">
                            <div>
                                <h3 className="text-lg font-medium text-white">All Events</h3>
                                <p className="text-sm text-gray-400">Manage your academy schedule</p>
                            </div>
                            <button 
                                onClick={openAddModal}
                                className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-primary/20"
                            >
                                <Plus size={16} />
                                Add Event
                            </button>
                        </div>

                        {/* Event List */}
                        <div className="grid grid-cols-1 gap-4">
                            {events.map((event: any) => (
                                <div key={event.id} className="bg-[#121214] border border-white/5 rounded-lg p-5 flex items-center justify-between group hover:border-white/10 transition-colors">
                                    <div className="flex-1 min-w-0">
                                        <div className="flex items-center gap-3 mb-1">
                                            <h4 className="text-white font-medium truncate">{event.title}</h4>
                                            <span className={`px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold ${
                                                event.status === 'upcoming' ? 'bg-green-500/10 text-green-500' : 
                                                event.status === 'past' ? 'bg-gray-500/10 text-gray-500' : 'bg-red-500/10 text-red-500'
                                            }`}>
                                                {event.status}
                                            </span>
                                            <span className="px-2 py-0.5 rounded text-[10px] uppercase tracking-wider font-bold bg-blue-500/10 text-blue-500">
                                                {event.category}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-4 text-xs text-gray-400">
                                            <div className="flex items-center gap-1.5">
                                                <Calendar size={12} />
                                                {event.date}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={12} />
                                                {event.time}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={12} />
                                                {event.location}
                                            </div>
                                        </div>
                                    </div>
                                    <button 
                                        onClick={() => handleDeleteEvent(event.id)}
                                        className="p-2 text-gray-500 hover:text-red-500 hover:bg-red-500/10 rounded-lg transition-colors"
                                        title="Delete Event"
                                    >
                                        <Trash2 size={18} />
                                    </button>
                                     <button 
                                        onClick={() => openEditModal(event)}
                                        className="p-2 text-gray-500 hover:text-blue-500 hover:bg-blue-500/10 rounded-lg transition-colors ml-2"
                                        title="Edit Event"
                                    >
                                        <Edit2 size={18} />
                                    </button>
                                </div>
                            ))}
                            {events.length === 0 && (
                                <div className="text-center py-12 text-gray-500 bg-[#121214] rounded-lg border border-dashed border-white/10">
                                    No events found. Create your first event!
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </main>
        </div>

        {/* Add Event Modal */}
        {showAddModal && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
                <div className="bg-[#121214] border border-white/10 rounded-lg w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                    <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-[#121214]">
                        <h3 className="text-lg font-bold text-white">{editingEvent ? "Edit Event" : "Add New Event"}</h3>
                        <button 
                            onClick={() => setShowAddModal(false)}
                            className="text-gray-400 hover:text-white transition-colors"
                        >
                            ✕
                        </button>
                    </div>
                    
                    <div className="p-6">
                        <form onSubmit={handleAddOrUpdateEvent} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <Type size={14} /> Event Title
                                    </label>
                                    <input
                                        name="title"
                                        required
                                        defaultValue={editingEvent?.title}
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="e.g. Annual Sports Day"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <Calendar size={14} /> Date
                                    </label>
                                    <DatePicker 
                                        name="date" 
                                        value={selectedDate} 
                                        onChange={setSelectedDate} 
                                        required 
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <Clock size={14} /> Time
                                    </label>
                                    <input
                                        name="time"
                                        required
                                        defaultValue={editingEvent?.time}
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="e.g. 09:00 AM - 05:00 PM"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                        <MapPin size={14} /> Location
                                    </label>
                                    <input
                                        name="location"
                                        required
                                        defaultValue={editingEvent?.location}
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                                        placeholder="Main Ground"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="block text-gray-400 text-sm font-medium">Category</label>
                                    <select
                                        name="category"
                                        required
                                        defaultValue={editingEvent?.category}
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
                                <div className="space-y-2">
                                    <label className="block text-gray-400 text-sm font-medium">Status</label>
                                    <select
                                        name="status"
                                        required
                                        defaultValue={editingEvent?.status}
                                        className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                                    >
                                        <option value="upcoming">Upcoming</option>
                                        <option value="past">Past</option>
                                        <option value="cancelled">Cancelled</option>
                                    </select>
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-gray-400 text-sm font-medium flex items-center gap-2">
                                    <AlignLeft size={14} /> Description
                                </label>
                                <textarea
                                    name="description"
                                    rows={4}
                                    required
                                    defaultValue={editingEvent?.description}
                                    className="w-full bg-black/20 border border-white/10 rounded px-4 py-2 text-white focus:outline-none focus:border-primary transition-colors"
                                    placeholder="Event details..."
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                disabled={loading}
                                className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 rounded transition-colors disabled:opacity-50"
                            >
                                {loading ? (editingEvent ? "Updating..." : "Adding...") : (editingEvent ? "Update Event" : "Add Event")}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )}
    </div>
  );
}
