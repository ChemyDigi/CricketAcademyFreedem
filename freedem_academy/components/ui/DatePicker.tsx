"use client";

import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon } from "lucide-react";
import clsx from "clsx";

interface DatePickerProps {
    name?: string;
    value?: string; // YYYY-MM-DD
    onChange?: (date: string) => void;
    required?: boolean;
}

export default function DatePicker({ name, value, onChange, required }: DatePickerProps) {
    const [isOpen, setIsOpen] = useState(false);
    const [currentMonth, setCurrentMonth] = useState(new Date()); // For navigation
    const containerRef = useRef<HTMLDivElement>(null);

    // Initialize selected date from value or empty
    const selectedDate = value ? new Date(value) : null;

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    const getDaysInMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
    const getFirstDayOfMonth = (date: Date) => new Date(date.getFullYear(), date.getMonth(), 1).getDay();

    const daysInMonth = getDaysInMonth(currentMonth);
    const firstDay = getFirstDayOfMonth(currentMonth);
    
    const emptySlots = Array.from({ length: firstDay }, (_, i) => i);
    const dateSlots = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    const prevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    const nextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

    const handleSelectDate = (day: number) => {
        const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
        // Format to YYYY-MM-DD
        const dateStr = date.toLocaleDateString('en-CA');
        if (onChange) onChange(dateStr);
        setIsOpen(false);
    };

    const isSelected = (day: number) => {
        if (!selectedDate) return false;
        return day === selectedDate.getDate() + 1 && // Simple adjustment might be needed due to timezone, but let's stick to simple comparison if using UTC/local consistent
               currentMonth.getMonth() === selectedDate.getMonth() &&
               currentMonth.getFullYear() === selectedDate.getFullYear();
    };
    
    // Better comparison ensuring we compare just components
    const isSameDate = (day: number) => {
         if (!selectedDate) return false;
         const target = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
         return target.toDateString() === selectedDate.toDateString();
    };

    return (
        <div className="relative" ref={containerRef}>
            <input type="hidden" name={name} value={value || ""} required={required} />
            
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className={clsx(
                    "w-full bg-black/20 border rounded px-4 py-2 text-left flex items-center gap-2 transition-colors",
                    "focus:outline-none focus:border-primary",
                    isOpen ? "border-primary" : "border-white/10",
                    value ? "text-white" : "text-gray-500"
                )}
            >
                <CalendarIcon size={16} className={value ? "text-primary" : "text-gray-500"} />
                {value || "Select Date"}
            </button>

            {isOpen && (
                <div className="absolute top-full left-0 z-50 mt-2 w-72 bg-[#121214] border border-white/10 rounded-lg shadow-xl p-4">
                    <div className="flex justify-between items-center mb-4">
                        <span className="font-bold text-white">
                            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </span>
                        <div className="flex gap-1">
                            <button onClick={prevMonth} className="p-1 hover:bg-white/10 rounded text-white"><ChevronLeft size={16} /></button>
                            <button onClick={nextMonth} className="p-1 hover:bg-white/10 rounded text-white"><ChevronRight size={16} /></button>
                        </div>
                    </div>

                    <div className="grid grid-cols-7 gap-1 text-center mb-2">
                        {days.map(d => <div key={d} className="text-gray-500 text-xs font-bold">{d}</div>)}
                    </div>

                    <div className="grid grid-cols-7 gap-1">
                        {emptySlots.map(i => <div key={`empty-${i}`} />)}
                        {dateSlots.map(day => {
                            const selected = isSameDate(day);
                            return (
                                <button
                                    key={day}
                                    onClick={() => handleSelectDate(day)}
                                    type="button"
                                    className={clsx(
                                        "h-8 w-8 text-sm rounded-full transition-colors flex items-center justify-center",
                                        selected 
                                            ? "bg-primary text-white font-bold" 
                                            : "text-gray-300 hover:bg-white/10"
                                    )}
                                >
                                    {day}
                                </button>
                            );
                        })}
                    </div>
                </div>
            )}
        </div>
    );
}
