"use server"

import { firestore, serverTimestamp } from "@/firebase/server";


export async function addQueryToDB(collection: string, data: object) {

  const docRef = firestore.collection(collection);

  try {
    const response = await docRef.add({
      ...data, 
      createdAt: serverTimestamp(),
      lastUpdated: serverTimestamp()
    });

    if(!response) {
      throw new Error('Could not add item to our database');
    }
  }catch(error) {
    throw new Error((error as Error).message);
  }
}