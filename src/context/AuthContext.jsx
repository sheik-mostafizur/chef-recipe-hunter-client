import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "@firebase/auth";
import {createContext, useContext, useEffect, useState} from "react";
import {
  auth,
  gitHubProvider,
  googleProvider,
} from "../firebase/firebase.config";
import LoaderSpinner from "../components/LoaderSpinner";
import Logo from "../assets/logo.png";

const UserContext = createContext({});

// eslint-disable-next-line react-hooks/rules-of-hooks
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

  const logInUserWithGoogle = async () =>
    await signInWithPopup(auth, googleProvider);

  const logInUserWithGitHub = async () =>
    await signInWithPopup(auth, gitHubProvider);

  const logOutUser = async () => await signOut(auth);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (res) => {
      res ? setUser(res) : setUser(null);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  const userInfo = {
    loading,
    user,
    createUser,
    logInUser,
    logInUserWithGoogle,
    logInUserWithGitHub,
    logOutUser,
  };

  return (
    <UserContext.Provider value={userInfo}>
      {loading ? (
        <div className="h-screen flex flex-col justify-center items-center">
          <img className="w-48" src={Logo} alt="Logo" />
          <LoaderSpinner />
        </div>
      ) : (
        children
      )}
    </UserContext.Provider>
  );
};

export default AuthContext;
