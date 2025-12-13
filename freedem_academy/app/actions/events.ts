"use server";

import { revalidatePath } from "next/cache";
import * as firebaseService from "@/lib/firebaseService";

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

        const newEvent: firebaseService.Event = {
            id: Date.now().toString(),
            title,
            date,
            time,
            location,
            description,
            category,
            status
        };

        // Add event to Firebase
        const result = await firebaseService.addEvent(newEvent);

        if (!result.success) {
            return { success: false, error: result.error || "Failed to add event" };
        }

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
    try {
        const events = await firebaseService.getEvents();
        return events;
    } catch (error) {
        console.error("Error fetching events:", error);
        return [];
    }
}


export async function deleteEvent(id: string) {
    try {
        const result = await firebaseService.deleteEvent(id);

        if (!result.success) {
            return { success: false, error: result.error || "Failed to delete event" };
        }

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

        const updatedEvent: Partial<firebaseService.Event> = {
            title,
            date,
            time,
            location,
            description,
            category,
            status
        };

        const result = await firebaseService.updateEvent(id, updatedEvent);

        if (!result.success) {
            return { success: false, error: result.error || "Failed to update event" };
        }

        revalidatePath("/");
        revalidatePath("/events");
        revalidatePath("/admin-panel");

        return { success: true, message: "Event updated successfully" };
    } catch (error) {
        console.error("Error updating event:", error);
        return { success: false, error: "Failed to update event" };
    }
}
