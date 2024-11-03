// FIREBASE
import { getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app, auth } from '@/firebase/client-config';
// UTILS
import { removeAuthCookie } from "./cookies";

export const signUserIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
}

export const signUserOut = async () => { 
  await signOut(getAuth(app))
  removeAuthCookie();
};

export const getCurrentUser = () => getAuth(app).currentUser;