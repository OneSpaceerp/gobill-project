import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import {
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  User,
} from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { auth, db } from "../firebase";

export type UserRole = "admin" | "supervisor";

interface AuthUser {
  uid: string;
  email: string | null;
  role: UserRole;
}

interface AuthContextType {
  user: AuthUser | null;
  loading: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
  isAdmin: boolean;
  isSupervisor: boolean;
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  loading: true,
  login: async () => {},
  logout: async () => {},
  isAdmin: false,
  isSupervisor: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser: User | null) => {
      if (firebaseUser) {
        // Fetch role from Firestore users collection
        let role: UserRole = "supervisor"; // default
        try {
          const userDoc = await getDoc(doc(db, "users", firebaseUser.uid));
          if (userDoc.exists()) {
            role = (userDoc.data().role as UserRole) || "supervisor";
          }
        } catch (e) {
          console.error("Error fetching user role:", e);
        }

        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          role,
        });
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(auth, email, password);
  };

  const logout = async () => {
    await signOut(auth);
  };

  const value: AuthContextType = {
    user,
    loading,
    login,
    logout,
    isAdmin: user?.role === "admin",
    isSupervisor: user?.role === "supervisor",
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
