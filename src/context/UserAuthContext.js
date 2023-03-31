import { createContext, useContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth } from "../services/firebase";

const userAuthContext = createContext();

export const useUserAuth = () => {
  return useContext(userAuthContext);
}

export const UserAuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const logIn = (email, password) => {
    setLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => console.log(res))
      .catch((err) => setError(err.code))
      .finally(() => setLoading(false));
  }

  const signUp = (email, password, name) => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
    .then(() =>
      updateProfile(auth.currentUser, {
        displayName: name,
      })
  )
  .then((res) => console.log(res))
  .catch((err) => setError(err.message))
  .finally(() => setLoading(false));
  }

  const logOut = () => {
    signOut(auth);
  }
  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleAuthProvider);
  }

  useEffect(() => {
    setLoading(true);
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      if (res) {
        setUser(res);
      } else {
        setUser(null);
      }
      setError("");
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  return (
    <userAuthContext.Provider
      value={{ user, loading, error, logIn, signUp, logOut, googleSignIn }}
    >
      {children}
    </userAuthContext.Provider>
  );
};
	