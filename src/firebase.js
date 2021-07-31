import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ_k8juGvFzC-O06fGqGIR5hjU3kh_1GA",
    authDomain: "e-clone-3d537.firebaseapp.com",
    projectId: "e-clone-3d537",
    storageBucket: "e-clone-3d537.appspot.com",
    messagingSenderId: "442371712776",
    appId: "1:442371712776:web:419115284522f45b832ebd",
    measurementId: "G-BXXHZRTJQ3"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export {db, auth};