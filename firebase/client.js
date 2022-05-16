import { initializeApp, getApps } from 'firebase/app'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC2TWs9g7HfZhNdVGX97CcyjXxjWB7NZo",
  authDomain: "our-planner-82c0d.firebaseapp.com",
  projectId: "our-planner-82c0d",
  storageBucket: "our-planner-82c0d.appspot.com",
  messagingSenderId: "588064143347",
  appId: "1:588064143347:web:875a2d461b0e01f0884486"
};

initializeApp(firebaseConfig)

const auth = getAuth()

const userInfo = (credential) => {
  return {
    userName: credential.displayName,
    email: credential.email,
    photoUrl: credential.photoURL
  }
}

export const userOnAuth = (onChange) => {
  return onAuthStateChanged(auth, (credential) => {
    const normalizeUser = credential
      ? userInfo(credential)
      : null
    onChange(normalizeUser)
  })
} 

export const login = () => {
  const gmailProvider = new GoogleAuthProvider
  return signInWithPopup(auth, gmailProvider)
    .then(credential => userInfo(credential.user))
    .catch(err => console.log(err))
}

