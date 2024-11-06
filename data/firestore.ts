"use server"

// FIREBASE
import { firestore, serverTimestamp } from "@/firebase/server";
// TYPES
import { IFirestoreFilters } from "@/types/firestore";
// UTILS
import { applyFirestoreFilters } from "@/utils/server";
import { validateUserSS } from "./auth";

export const getCollectionData = async (collection: string, filters: IFirestoreFilters): Promise<FirebaseFirestore.DocumentData[]> => {
    const isUserValid = await validateUserSS();

    if (!isUserValid) {
      throw new Error('You must be authenticated to access this resource');
    }

    const docsRef = firestore.collection(collection).limit(5);
    const docsWithFilters = filters
      ? applyFirestoreFilters(docsRef, filters)
      : docsRef

    const docsSnapshot = await docsWithFilters.get();
    const docsData = docsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toMillis() ?? null,
      lastUpdated: doc.data().lastUpdated?.toMillis() ?? null,
      updatedAt: doc.data().updatedAt?.toMillis() ?? null,
    }))

    return docsData;
}


export const addQueryToDB = async (collection: string, data: object) => {

  const docRef = firestore.collection(collection);

  try {
    const response = await docRef.add({
      ...data, 
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    if(!response) {
      throw new Error('Could not add item to our database');
    }
  }catch(error) {
    throw new Error((error as Error).message);
  }
}