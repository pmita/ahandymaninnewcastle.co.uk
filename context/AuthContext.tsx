"use client"

// REACT
import { createContext, useState, useEffect } from "react";
// FIREBASE
import { getAuth, getIdToken, onAuthStateChanged, type User} from "firebase/auth";
import { app, auth } from '@/firebase/client-config';
// UTILS
import { setAuthCookie } from "@/utils/cookies";

type AuthContextType = {
  user: User| null;
  setUser: React.Dispatch<React.SetStateAction<User| null>>;
};

const AuthContext = createContext<AuthContextType | null>(null);

const AuthContextProvider = ({ children }: { children: React.ReactNode }) => {
  // STATE && VARIABLES
  const [user, setUser] = useState<User| null>(null);

  // USE EFFECTS
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      user ? setUser(user) : setUser(null);
    })

    const currentUser = getAuth(app).currentUser;

    if (currentUser) {
      getIdToken(currentUser, true).then((idToken) => {
        setAuthCookie(idToken);
      })
    }

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };