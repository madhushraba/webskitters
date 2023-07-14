// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBown5iFq3VM7C2nfJVH6FMSO9pEojHpzw",
  authDomain: "webskitters-todos.firebaseapp.com",
  projectId: "webskitters-todos",
  storageBucket: "webskitters-todos.appspot.com",
  messagingSenderId: "211120421498",
  appId: "1:211120421498:web:a6be3f58ba778d0ad659c3"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db =getFirestore(app)
