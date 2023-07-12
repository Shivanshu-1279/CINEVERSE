import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyB8_Nrfgff42ENkBUxLQ6W2tSwiBCFqhmw",
    authDomain: "netflixapp-79db0.firebaseapp.com",
    projectId: "netflixapp-79db0",
    storageBucket: "netflixapp-79db0.appspot.com",
    messagingSenderId: "494059382917",
    appId: "1:494059382917:web:834cefce8addb2936fa1ec",
    measurementId: "G-G6JL3TYWLP"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();
export default storage;