import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import {auth} from "../firebase/firebase.config";

const UserContext = createContext({});

export const uesAuthContext = () => useContext(UserContext);

const AuthContext = ({children}) => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  const createUser = async (email, password) => {
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const logInUser = async (email, password) => {
    return await signInWithEmailAndPassword(auth, email, password);
  };

  const logOutUser = async () => await signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const userInfo = {loading, user, createUser, logInUser, logOutUser};

  return (
    <UserContext.Provider value={userInfo}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
