import { useEffect, useState } from "react";
import initializeFirebase from "../FirebaseInit";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  updateProfile,
  getIdToken,
} from "firebase/auth";
// initialize Firebase app
initializeFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIstLoading] = useState(true);
  const [authError, setError] = useState("");
  const [admin, setAdmin] = useState('');
console.log(admin)

  const auth = getAuth();
  const provider = new GoogleAuthProvider();

  const registerUser = (email, password, name,phone,addres, history) => { 
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Error Handel
        setError("");
        // name update
        const newUser = { email, displayName: name,phone,addres,history};
        setUser(newUser);
        // save User to the database  
        saveUser(email, name,phone,addres, 'POST');
        // name with Firebase
        updateProfile(auth.currentUser, {
          displayName: name,
        })
          .then(() => {})
          .catch((error) => {});
        // Login return to the Private Page
        history.replace("/");
      })
      .catch((error) => {
        // ..
      });
  };

  const loginUser = (email, password, location, history) => {
    // Loading
    setIstLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login return to the Private Page
        const destination = location?.state?.from || "/";
        history.replace(destination);
        // name with Firebase

        // error handel
        setError("");
      })
      .catch((error) => {
        // error handel
        setError(error.message);
      })
      // Loading
      .finally(() => setIstLoading(false));
  };

  const signImWithGoogle = (location, history) => {
    setIstLoading(true);
    signInWithPopup(auth, provider)
      .then((result) => {
        // user data save or update
        const user = result.user;
        saveUser(user.email, user.displayName, 'PUT');
        const destination = location?.state?.from || "/";
        history.replace(destination);
        setError("");
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIstLoading(false));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      // Loading
      setIstLoading(false);
    });
    return () => unsubscribe;
  }, []);

  const logOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      // Loading
      .finally(() => setIstLoading(false));
  };

  // save User to the database
  const saveUser = (email, displayName,phone,addres,method) => {
    const user = { email, displayName, addres, phone};
    fetch("https://pacific-escarpment-27904.herokuapp.com/users", {
      method: method,
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    }).then();
  };
  
  useEffect(() =>{
    fetch(`https://pacific-escarpment-27904.herokuapp.com/users/${user.email}`)
    .then(res => res.json())
    .then(data => setAdmin(data.admin))
  }, [user.email])
  return {
    user,
    registerUser,
    loginUser,
    logOut,
    isLoading,
    authError,
    signImWithGoogle,
    admin,
  };
};

export default useFirebase;
