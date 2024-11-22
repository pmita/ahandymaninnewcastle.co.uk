// FIREBASE
import { getAuth, getIdToken, signInWithEmailAndPassword, signOut } from "firebase/auth"
import { app, auth } from '@/firebase/client-config';
// UTILS
import { removeAuthCookie, setAuthCookie } from "./cookies";

export const signUserIn = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
}

export const saveFirebaseCookie = async () => {
  const currentUser = getAuth(app).currentUser;
  if (currentUser) {
    const idToken = await getIdToken(currentUser, true);
    setAuthCookie(idToken);
  }
}

export const signUserOut = async () => { 
  await signOut(getAuth(app))
};

export const getCurrentUser = () => getAuth(app).currentUser;