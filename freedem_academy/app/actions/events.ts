"use server";


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



export async function getEvents() {
    return await readEventsFromFile();
}


