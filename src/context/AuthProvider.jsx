import { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { auth, gitHubProvider, googleProvider } from "../config/firebase";

const AuthContex = createContext();
export const useAuth = () => useContext(AuthContex);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };
  const signInWithGitHub = () => {
    setLoading(true);
    return signInWithPopup(auth, gitHubProvider);
  };

  const logOut = () => signOut(auth);

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubcribe();
  }, []);

  const value = {
    user,
    signInWithGoogle,
    signInWithGitHub,
    logOut,
    loading,
  };

  return <AuthContex.Provider value={value}>{children}</AuthContex.Provider>;
};

export default AuthProvider;
