
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBMfO7o4-CpraFkoBSyzU-UfqM8NdLPu1E",
    authDomain: "clone-49635.firebaseapp.com",
    projectId: "clone-49635",
    storageBucket: "clone-49635.appspot.com",
    messagingSenderId: "13899929242",
    appId: "1:13899929242:web:a3c5c2d232e34091bc3123"
  };

  if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
 }else {
     firebase.app(); // if already initialized, use that one
 }
  //const firebaseApp = firebase.initializeApp(firebaseConfig)
  //const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};