import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
  setDoc
} from "firebase/firestore";
import { db } from "./firebase";

// Event type
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

// Generic CRUD operations

// Get all documents from a collection
export async function getCollectionData<T>(collectionName: string): Promise<T[]> {
  try {
    const collectionRef = collection(db, collectionName);
    const q = query(collectionRef, orderBy("id", "asc"));
    const snapshot = await getDocs(q);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as T));
  } catch (error) {
    console.error(`Error fetching ${collectionName}:`, error);
    return [];
  }
}

// Add a document to a collection
export async function addDocument<T extends { id: string }>(
  collectionName: string,
  data: T
): Promise<{ success: boolean; error?: string; id?: string }> {
  try {
    // Use setDoc with custom ID instead of addDoc
    const docRef = doc(db, collectionName, data.id);
    await setDoc(docRef, {
      ...data,
      createdAt: new Date().toISOString()
    });
    return { success: true, id: data.id };
  } catch (error: any) {
    console.error(`Error adding to ${collectionName}:`, error);
    return { success: false, error: error.message };
  }
}

// Update a document in a collection
export async function updateDocument<T>(
  collectionName: string,
  documentId: string,
  data: Partial<T>
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, collectionName, documentId);
    await updateDoc(docRef, data as any);
    return { success: true };
  } catch (error: any) {
    console.error(`Error updating ${collectionName}:`, error);
    return { success: false, error: error.message };
  }
}

// Delete a document from a collection
export async function deleteDocument(
  collectionName: string,
  documentId: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const docRef = doc(db, collectionName, documentId);
    await deleteDoc(docRef);
    return { success: true };
  } catch (error: any) {
    console.error(`Error deleting from ${collectionName}:`, error);
    return { success: false, error: error.message };
  }
}

// Events
export const getEvents = () => getCollectionData<Event>("events");
export const addEvent = (event: Event) => addDocument<Event>("events", event);
export const updateEvent = (id: string, event: Partial<Event>) =>
  updateDocument<Event>("events", id, event);
export const deleteEvent = (id: string) => deleteDocument("events", id);
