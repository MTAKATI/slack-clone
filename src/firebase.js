// firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "slack-clone-daa2d.firebaseapp.com",
  projectId: "slack-clone-daa2d",
  storageBucket: "slack-clone-daa2d.appspot.com",
  messagingSenderId: "920104091353",
  appId: "1:920104091353:web:3cf9f7578dfc22078388c8",
  measurementId: "G-59QSBTYYW5"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { db, auth, provider };
