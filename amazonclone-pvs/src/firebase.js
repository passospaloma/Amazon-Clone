import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDq76cq0qKZqmTnuIa2ietrCK0L0oADAhE",
  authDomain: "clone-pvs.firebaseapp.com",
  databaseURL: "https://clone-pvs.firebaseio.com",
  projectId: "clone-pvs",
  storageBucket: "clone-pvs.appspot.com",
  messagingSenderId: "868971239912",
  appId: "1:868971239912:web:50eed803ba2474c128ac5d",
  measurementId: "G-W6JBVHXY1M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
