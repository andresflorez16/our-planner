import { initializeApp } from 'firebase/app'
import { getFirestore, addDoc, collection } from 'firebase/firestore'
import {
  signInWithPopup,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBC2TWs9g7HfZhNdVGX97CcyjXxjWB7NZo",
  authDomain: "our-planner-82c0d.firebaseapp.com",
  projectId: "our-planner-82c0d",
  storageBucket: "our-planner-82c0d.appspot.com",
  messagingSenderId: "588064143347",
  appId: "1:588064143347:web:875a2d461b0e01f0884486"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
const auth = getAuth()

const userInfo = (credential) => {
  return {
    userName: credential.displayName ? credential.displayName : credential.email.split('@')[0],
    email: credential.email,
    photoUrl: credential.photoURL ? credential.photoURL : '/user-default.png'
  }
}

export const userOnAuth = (onChange) => {
  return onAuthStateChanged(auth, (credential) => {
    console.log(credential)
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

export const userSignOut = () => {
  return signOut(auth)
    .then(() => console.log('signOut'))
    .catch(err => console.log(err))
}

export const addUser = (user) => {
  return createUserWithEmailAndPassword(auth, user.email, user.password)
}

export const loginEmailPassword = (user) => {
  return signInWithEmailAndPassword(auth, user.email, user.password)
}
