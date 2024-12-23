"use client"

// REACT
import { createContext, useState, useEffect } from "react";
// FIREBASE
import { onAuthStateChanged, type User} from "firebase/auth";
import { auth } from '@/firebase/client-config';
// UTILS
import { saveFirebaseCookie } from "@/utils/auth";
import { removeAuthCookie } from "@/utils/cookies";

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
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        setUser(user);
        await saveFirebaseCookie();
      } else {
        setUser(null);
        removeAuthCookie();
      }
    })

    return () => unsubscribe();
  }, [user]);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthContextProvider };