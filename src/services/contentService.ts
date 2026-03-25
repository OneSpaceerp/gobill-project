import {
  collection,
  doc,
  getDocs,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  addDoc,
  query,
  orderBy,
  DocumentData,
} from "firebase/firestore";
import { db } from "../firebase";

/* ─── Collection names ─── */
export const COLLECTIONS = {
  SERVICES: "services",
  BLOGS: "blogs",
  HERO_SLIDES: "heroSlides",
  NAVIGATION: "navigation",
  SITE_CONTENT: "siteContent",
  USERS: "users",
} as const;

/* ─── Generic CRUD ─── */

export async function getAll(collectionName: string, orderField?: string) {
  const ref = collection(db, collectionName);
  const q = orderField ? query(ref, orderBy(orderField)) : ref;
  const snapshot = await getDocs(q);
  return snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
}

export async function getOne(collectionName: string, docId: string) {
  const snap = await getDoc(doc(db, collectionName, docId));
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
}

export async function createOne(collectionName: string, data: DocumentData, customId?: string) {
  if (customId) {
    await setDoc(doc(db, collectionName, customId), data);
    return customId;
  }
  const ref = await addDoc(collection(db, collectionName), data);
  return ref.id;
}

export async function updateOne(collectionName: string, docId: string, data: DocumentData) {
  await updateDoc(doc(db, collectionName, docId), data);
}

export async function deleteOne(collectionName: string, docId: string) {
  await deleteDoc(doc(db, collectionName, docId));
}

/* ─── Specialized helpers ─── */

export async function getSiteContent(key: string) {
  return getOne(COLLECTIONS.SITE_CONTENT, key);
}

export async function updateSiteContent(key: string, data: DocumentData) {
  await setDoc(doc(db, COLLECTIONS.SITE_CONTENT, key), data, { merge: true });
}

export async function getAllServices() {
  return getAll(COLLECTIONS.SERVICES, "order");
}

export async function getAllBlogs() {
  return getAll(COLLECTIONS.BLOGS, "order");
}

export async function getAllHeroSlides() {
  return getAll(COLLECTIONS.HERO_SLIDES, "order");
}

export async function getNavigation() {
  return getOne(COLLECTIONS.NAVIGATION, "main");
}

export async function updateNavigation(data: DocumentData) {
  await setDoc(doc(db, COLLECTIONS.NAVIGATION, "main"), data, { merge: true });
}

export async function getAllUsers() {
  return getAll(COLLECTIONS.USERS);
}
