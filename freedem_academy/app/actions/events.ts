"use server";

import { revalidatePath } from "next/cache";
import fs from "fs/promises";
import path from "path";

const EVENTS_FILE_PATH = path.join(process.cwd(), "data", "events.json");

export interface Event {
    id: string;
    title: string;
    date: string;
    time: string;
    location: string;
    description: string;
    category: string;
    status: string;
    createdAt?: string;
}

async function readEventsFromFile(): Promise<Event[]> {
    try {
        const data = await fs.readFile(EVENTS_FILE_PATH, "utf-8");
        return JSON.parse(data);
    } catch (error) {
        console.error("Error reading events from file:", error);
        // If file doesn't exist or is invalid, return empty array
        return [];
    }
}

async function writeEventsToFile(events: Event[]): Promise<void> {
    try {
        await fs.writeFile(EVENTS_FILE_PATH, JSON.stringify(events, null, 2), "utf-8");
    } catch (error) {
        console.error("Error writing events to file:", error);
        throw new Error("Failed to save events.");
    }
}

export async function verifyPassword(password: string) {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
        // Fallback for development if env is not set, or error out. 
        // For security, better to error if not set, but for "run locally" valid demo, maybe a default?
        // Sticking to env var check as per original code.
        console.error("ADMIN_PASSWORD is not set in environment variables");
        return { success: false, error: "Server configuration error" };
    }

    if (password === adminPassword) {
        return { success: true };
    }

    return { success: false, error: "Invalid password" };
}

export async function addEvent(formData: FormData) {
    try {
        const password = formData.get("password") as string;
        const auth = await verifyPassword(password);

        if (!auth.success) {
            return { success: false, error: auth.error };
        }

        const title = formData.get("title") as string;
        const date = formData.get("date") as string;
        const time = formData.get("time") as string;
        const location = formData.get("location") as string;
        const description = formData.get("description") as string;
        const category = formData.get("category") as string;
        const status = formData.get("status") as string;

        const newEvent: Event = {
            id: Date.now().toString(),
            title,
            date,
            time,
            location,
            description,
            category,
            status,
            createdAt: new Date().toISOString()
        };

        const events = await readEventsFromFile();
        events.push(newEvent);
        await writeEventsToFile(events);

        // Revalidate paths
        revalidatePath("/");
        revalidatePath("/events");
        revalidatePath("/admin-panel");

        return { success: true, message: "Event added successfully" };
    } catch (error) {
        console.error("Error adding event:", error);
        return { success: false, error: "Failed to add event" };
    }
}

export async function getEvents() {
    return await readEventsFromFile();
}

export async function deleteEvent(id: string) {
    try {
        const events = await readEventsFromFile();
        const filteredEvents = events.filter(event => event.id !== id);

        if (events.length === filteredEvents.length) {
            return { success: false, error: "Event not found" };
        }

        await writeEventsToFile(filteredEvents);

        revalidatePath("/");
        revalidatePath("/events");
        revalidatePath("/admin-panel");

        return { success: true };
    } catch (error) {
        console.error("Error deleting event:", error);
        return { success: false, error: "Failed to delete event" };
    }
}

export async function updateEvent(id: string, formData: FormData) {
    try {
        const password = formData.get("password") as string;
        const auth = await verifyPassword(password);

        if (!auth.success) {
            return { success: false, error: auth.error };
        }

        const title = formData.get("title") as string;
        const date = formData.get("date") as string;
        const time = formData.get("time") as string;
        const location = formData.get("location") as string;
        const description = formData.get("description") as string;
        const category = formData.get("category") as string;
        const status = formData.get("status") as string;

        const events = await readEventsFromFile();
        const eventIndex = events.findIndex(e => e.id === id);

        if (eventIndex === -1) {
            return { success: false, error: "Event not found" };
        }

        const updatedEvent: Event = {
            ...events[eventIndex],
            title,
            date,
            time,
            location,
            description,
            category,
            status,
        };

        events[eventIndex] = updatedEvent;
        await writeEventsToFile(events);

        revalidatePath("/");
        revalidatePath("/events");
        revalidatePath("/admin-panel");

        return { success: true, message: "Event updated successfully" };
    } catch (error) {
        console.error("Error updating event:", error);
        return { success: false, error: "Failed to update event" };
    }
}
