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

    const docsRef = firestore.collection(collection);
    const docsWithFilters = filters
      ? applyFirestoreFilters(docsRef, filters)
      : docsRef

    const docsSnapshot = await docsWithFilters.get();
    const docsData = docsSnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
      createdAt: doc.data().createdAt?.toMillis() ?? null,
      updatedAt: doc.data().updatedAt?.toMillis() ?? null,
    }))

    return docsData;
}

export const getDocumentData = async(collection: string, docId: string): Promise<FirebaseFirestore.DocumentData> => {
  const isUserValid = await validateUserSS();

  if (!isUserValid) {
    throw new Error('You must be authenticated to access this resource');
  }

  const docsRef = firestore.collection(collection).doc(docId);
  const docSnapshot = await docsRef.get();
  const docData = docSnapshot.data();

  return {
    id: docSnapshot.id,
    ...docData,
    createdAt: docData?.createdAt?.toMillis() ?? null,
    updatedAt: docData?.updatedAt?.toMillis() ?? null,
  }
}


export const addQueryToDB = async (collection: string, data: object) => {

  const docRef = firestore.collection(collection);

  try {
    const response = await docRef.add({
      ...data, 
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    if(!response) {
      throw new Error('Could not add item to our database');
    }

    await response.update({
      id: response.id,
    });
  }catch(error) {
    throw new Error((error as Error).message);
  }
}

export const updateDocumentData = async (collection: string, docId: string, data: object) => {
  const docRef = firestore.collection(collection).doc(docId);

  try {
    const response = await docRef.update({
      ...data,
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    if(!response) {
      throw new Error('Could not update item in our database');
    }
  }catch(error) {
    throw new Error((error as Error).message);
  }
} 