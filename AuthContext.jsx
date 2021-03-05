import React, { useState, useContext, useEffect } from 'react'
import firebase from 'firebase/app'
import { auth } from '../firebase'

const AuthContext = React.createContext()

export function useAuth() {
  return useContext(AuthContext)
}

export function AuthProvider({ children }) {

  const [currentUser, setCurrentUser] = useState()
  const [loading, setLoading] = useState(true)

  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  function login(email, password) {
   firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
   .then(() => {
     return firebase.auth().signInWithEmailAndPassword(email, password);
   })
   .catch((error) => {
     var errorCode = error.code;
     var errorMessage = error.message;
   });
  }

  function logout() {
    return auth.signOut()
  }

  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email)
  }

  function updateName(displayName){
    return auth.updateCurrentUser(displayName)
  }

  function updateEmail(email){
    return currentUser.updateEmail(email)
  }

  function updatePassword(password){
    return currentUser.updatePassword(password)
  }

  function loginPhone(phone){
    return auth.signInWithPhoneNumber(phone)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      setLoading(false)
    })
    return unsubscribe
  }, [])
 

  const value = {
    currentUser,
    signup,
    login,
    logout,
    resetPassword,
    updateName,
    updateEmail,
    updatePassword,
    loginPhone,
  }

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
};
