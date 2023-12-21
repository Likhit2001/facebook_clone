import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBivpE08z2l8F4bqB7AoA9ADdSRtC0iqkM",
    authDomain: "facebook-clone-a72cb.firebaseapp.com",
    projectId: "facebook-clone-a72cb",
    storageBucket: "facebook-clone-a72cb.appspot.com",
    messagingSenderId: "493965988895",
    appId: "1:493965988895:web:7bb7e494c1045294abf12a",
    measurementId: "G-QLSP70BQSW"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth , provider };
  export default db;