import firebaseinitializeApp from "../firebase/firebase.init";
import { useState, useEffect } from "react";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

firebaseinitializeApp();

const useFirebase = () => {
  const [user, setUser] = useState("hello");
  const [loaddata, setLodingdata] = useState(true);
  const googleProvider = new GoogleAuthProvider();
  const auth = getAuth();

  const logingWithGoogle = () => {
    signInWithPopup(auth, googleProvider).then((result) => {
      setUser(result);
      setLodingdata(false);
    });
  };

  const logOut = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    const unsubcri = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
        setLodingdata(false);
      } else {
        setUser({});
      }
    });
    return () => unsubcri;
  }, [auth]);

  return {
    user,
    setUser,
    logingWithGoogle,
    loaddata,
    logOut,
  };
};

export default useFirebase;
