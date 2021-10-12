import firebase from "firebase/app";

import "firebase/firestore";

import "firebase/auth";

import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCdrPTiQT_z_2N9xndZbqMU5WJ12Xt7UOE",
  authDomain: "reells1.firebaseapp.com",
  databaseURL: "https://reells1-default-rtdb.firebaseio.com",
  projectId: "reells1",
  storageBucket: "reells1.appspot.com",
  messagingSenderId: "794021096881",
  appId: "1:794021096881:web:8c35c9766bc04147216190",
};
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export const auth = firebase.auth();
export const storage = firebase.storage();

let provider = new firebase.auth.GoogleAuthProvider();

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
