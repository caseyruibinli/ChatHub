import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithRedirect,
  signOut,
} from "firebase/auth";
import { createContext, useState, useContext, useEffect } from "react";
import { auth } from "../firebase";

// Creating the Authentication Context
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // State for current user and loading status
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // Function to handle signing in with Google
  const signinWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithRedirect(auth, provider);
    } catch (error) {
      console.error("Error signing in with Google:", error);
    }
  };

  // Function to handle user sign out
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  // Context value containing user data and auth functions
  const value = {
    currentUser,
    setCurrentUser,
    signinWithGoogle,
    logout,
  };

  // Effect to monitor authentication state changes
  useEffect(() => {
    // Function to update state based on auth changes
    const handleAuthStateChanged = (user) => {
      setCurrentUser(user);
      setLoading(false);
    };

    // Subscribe to authentication state changes
    const unsubscribe = onAuthStateChanged(auth, handleAuthStateChanged);

    // Cleanup function to unsubscribe on component unmount
    return () => {
      unsubscribe();
    };
  }, []);

  // Render children only when not loading
  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};

// Custom hook for accessing auth context
export const UserAuth = () => {
  return useContext(AuthContext);
};
