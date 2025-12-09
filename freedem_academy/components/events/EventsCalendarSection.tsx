"use client";
"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import eventsData from "@/data/events.json";

export default function EventsCalendarSection() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  // Helper to get days in month
  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  // Helper to get day of week for first day of month
  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay();
  };

  const daysInMonth = getDaysInMonth(currentDate);
  const firstDay = getFirstDayOfMonth(currentDate);

  // Generate array for empty slots
  const emptySlots = Array.from({ length: firstDay }, (_, i) => i);
  
  // Generate array for days
  const dateSlots = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  const prevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
  };

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  const getEventsForDate = (day: number) => {
    const checkDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    // Format to YYYY-MM-DD to match json
    const dateStr = checkDate.toLocaleDateString('en-CA'); // en-CA gives YYYY-MM-DD
    return eventsData.filter(e => e.date === dateStr);
  };

  const isToday = (day: number) => {
    const today = new Date();
    return day === today.getDate() && 
           currentDate.getMonth() === today.getMonth() && 
           currentDate.getFullYear() === today.getFullYear();
  };

  return (
    <section className="py-16 bg-[#08080A]">
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="bg-[#121214] p-8 border border-white/5 rounded-lg">
          <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
            <h2 className="text-2xl font-bold text-white uppercase flex items-center gap-4">
              <span className="text-primary">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</span>
            </h2>
            <div className="flex gap-2 items-center">
              <button 
                onClick={goToToday}
                className="px-3 py-2 bg-white/5 hover:bg-primary transition-colors text-white rounded text-sm mr-2 font-medium"
              >
                Today
              </button>
              <button 
                onClick={prevMonth}
                className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded"
                aria-label="Previous month"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={nextMonth}
                className="p-2 bg-white/5 hover:bg-primary transition-colors text-white rounded"
                aria-label="Next month"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div className="grid grid-cols-7 gap-1 sm:gap-4 text-center mb-4">
            {days.map(d => <div key={d} className="text-gray-500 text-xs sm:text-sm font-bold uppercase">{d}</div>)}
          </div>
          <div className="grid grid-cols-7 gap-1 sm:gap-4">
            {/* Empty slots for previous month days */}
            {emptySlots.map(i => (
              <div key={`empty-${i}`} className="h-24 p-2 border border-transparent"></div>
            ))}
            
            {/* Actual days */}
            {dateSlots.map(date => {
                const dayEvents = getEventsForDate(date);
                const hasEvents = dayEvents.length > 0;
                const isCurrentDay = isToday(date);
                
                return (
                  <div 
                    key={date} 
                    className={`min-h-24 p-1 sm:p-2 border relative transition-colors overflow-hidden
                        ${isCurrentDay ? 'border-primary bg-primary/5' : 'border-white/5 hover:bg-white/5'}
                        ${hasEvents ? 'bg-white/[0.02]' : ''}
                    `}
                  >
                     <span className={`text-sm block mb-1 ${isCurrentDay ? 'text-primary font-bold' : 'text-gray-400'}`}>{date}</span>
                     {dayEvents.map(event => (
                        <div key={event.id} className="mt-1 text-[10px] bg-primary text-white p-1 rounded truncate w-full" title={event.title}>
                          {event.title}
                        </div>
                     ))}
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
