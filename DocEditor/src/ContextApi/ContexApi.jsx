import { createContext, useEffect, useState } from "react";
import io from "socket.io-client";
import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import app from "../Firebase/firebase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const ContexApi = ({ children }) => {
  const [user, setUser] = useState({});
  const [users, setUsers] = useState([]);
  const [firebaseUser, setFirebaseUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const server = "http://localhost:9000/";
  const connectionOptions = {
    "force new connection": true,
    reconnectionAttempts: "Infinity",
    timeout: 10000,
    transports: ["websocket"],
  };
  const socket = io(server, connectionOptions);

  const createUserEmailPass = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signInEmailPass = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  const updateUser = (username) => {
    updateProfile(auth.currentUser, {
      displayName: username,
    });
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      // console.log("unSubscribe")
      console.log(currentUser);
      setFirebaseUser(currentUser);
      setLoading(false);
    });
    return () => {
      return unSubscribe();
    };
  });
  const data = {
    setUser,
    setUsers,
    user,
    socket,
    firebaseUser,
    loading,
    createUserEmailPass,
    googleSignIn,
    signInEmailPass,
    logOut,
    updateUser,
  };
  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default ContexApi;
