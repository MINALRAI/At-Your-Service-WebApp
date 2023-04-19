// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';


const firebaseConfig = {
    apiKey: "AIzaSyDeAnQ7xdk88bXNZSu5Il3tsAWM7bJIfiI",
    authDomain: "at-your-service-eee7d.firebaseapp.com",
    projectId: "at-your-service-eee7d",
    storageBucket: "at-your-service-eee7d.appspot.com",
    messagingSenderId: "463567079921",
    appId: "1:463567079921:web:4e13902ecb7a10f9435c50",
    measurementId: "G-ZWVJCH30W9"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);

  const db= firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };