"use server";

import fs from "fs/promises";
import path from "path";
import { revalidatePath } from "next/cache";

const EVENTS_FILE_PATH = path.join(process.cwd(), "data", "events.json");

export async function verifyPassword(password: string) {
    const adminPassword = process.env.ADMIN_PASSWORD;

    if (!adminPassword) {
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

        const newEvent = {
            id: Date.now().toString(),
            title,
            date,
            time,
            location,
            description,
            category,
            status
        };

        // Read existing events
        const fileContent = await fs.readFile(EVENTS_FILE_PATH, "utf-8");
        const events = JSON.parse(fileContent);

        // Add new event
        events.push(newEvent);

        // Write back to file
        await fs.writeFile(EVENTS_FILE_PATH, JSON.stringify(events, null, 4));

        // Revalidate paths
        revalidatePath("/");
        revalidatePath("/events");

        return { success: true, message: "Event added successfully" };
    } catch (error) {
        console.error("Error adding event:", error);
        return { success: false, error: "Failed to add event" };
    }
}

export async function getEvents() {
    try {
        const fileContent = await fs.readFile(EVENTS_FILE_PATH, "utf-8");
        return JSON.parse(fileContent);
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}

export async function deleteEvent(id: string) {
    try {
        const fileContent = await fs.readFile(EVENTS_FILE_PATH, "utf-8");
        let events = JSON.parse(fileContent);

        events = events.filter((e: any) => e.id !== id);

        await fs.writeFile(EVENTS_FILE_PATH, JSON.stringify(events, null, 4));

        revalidatePath("/");
        revalidatePath("/events");

        return { success: true };
    } catch (error) {
        console.error("Error deleting event:", error);
        return { success: false, error: "Failed to delete event" };
    }
}
