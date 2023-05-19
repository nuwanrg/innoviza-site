import React, { useContext, useState, useEffect } from "react"
import { auth } from "../hooks/firebase.js"
import { getAuth,createUserWithEmailAndPassword ,onAuthStateChanged,signInWithEmailAndPassword,  GoogleAuthProvider, signInWithPopup} from "firebase/auth";

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  async function signup(email, password) {
    console.log("Signup is called... ", email, password)
    return await createUserWithEmailAndPassword(auth, email, password)
    
    //Email verification goes here
    // const user = response.user;
    // console.log("currentUser is user ", user)
    // user.sendEmailVerification().then(function() {
    //     // Email sent.
    //     console.log("Email sent")
    //   }).catch(function(error) {
    //     console.error(error);
    //   });
    
    //return currentUser
  }

  async function login(email, password) {
    console.log("Login is called... ")
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateEmail(email) {
    return currentUser.updateEmail(email)
  }

  function updatePassword(password) {
    return currentUser.updatePassword(password)
  }

  async function singUpWithGoogle() {
    console.log("singUpWithGoogle is called... ")
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    try {
      const result = await signInWithPopup(auth, provider);
      // The signed-in user info.
      const user = result.user;
      console.log(user); // for testing purposes, remove or comment out in production code
    } catch (error) {
      // Handle Errors here.
      console.error(error);
    }
  }

  useEffect(() => {
    console.log("UseEffect in AuthContext is called... ")
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })

    return unsubscribe
  }, [])

  const value = {
    currentUser,
    login,
    signup,
    logout,
    resetPassword,
    updateEmail,
    updatePassword,
    singUpWithGoogle
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}