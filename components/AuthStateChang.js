import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { singIn } from "../store/firebaseSlice";

const AuthStateChang = ({ children }) => {
  let dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          singIn({
            user: user,
          })
        );
      }
    });
  }, []);

  return children;
};

export default AuthStateChang;
