import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBjQ__reEmlY49qqaYIA8MNM8tlvtLZsOM",
  authDomain: "danishjamal-37da0.firebaseapp.com",
  projectId: "danishjamal-37da0",
  storageBucket: "danishjamal-37da0.appspot.com",
  messagingSenderId: "51638217231",
  appId: "1:51638217231:web:c94a8b21e815cb3c29117a",
  measurementId: "G-XRE2DZS9BQ"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };