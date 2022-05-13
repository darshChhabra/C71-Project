import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyAbNZ9H42zY1ma7ZMFjy3kJ7HIsDdgWc5U",
    authDomain: "c71-project-6b389.firebaseapp.com",
    projectId: "c71-project-6b389",
    storageBucket: "c71-project-6b389.appspot.com",
    messagingSenderId: "471639532521",
    appId: "1:471639532521:web:ce5b8deb4d83892ec82178"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
