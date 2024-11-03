// FIREBASE
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { app, auth } from '@/firebase/client-config';

export const signin = async (email: string, password: string) => {
  const response = await signInWithEmailAndPassword(auth, email, password);
  return response;
}

export const getCurrentUser = () => getAuth(app).currentUser;