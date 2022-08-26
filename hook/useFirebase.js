import firebaseinitializeApp from "../firebase/firebase.init";
import { useState } from "react";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithRedirect,
} from "firebase/auth";

firebaseinitializeApp();

const useFirebase = () => {
  const [user, setUser] = useState(null);
  const [loaddata, setLodingdata] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const logingWithGoogle = async () => {
    const logData = await signInWithRedirect(auth, googleProvider);
    setUser(logData.user);
    setLodingdata(false);
  };

  const logOut = async () => {
    try {
      await signOut(auth);
    } finally {
      setUser(null);
    }
  };

  return {
    user,
    setUser,
    logingWithGoogle,
    loaddata,
    logOut,
  };
};

export default useFirebase;
