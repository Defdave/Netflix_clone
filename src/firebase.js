import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDc2kb3wllWQILp7SsAVg-Xb_ouXEv8ay4",
    authDomain: "netflix-clone-fb649.firebaseapp.com",
    projectId: "netflix-clone-fb649",
    storageBucket: "netflix-clone-fb649.appspot.com",
    messagingSenderId: "266293699299",
    appId: "1:266293699299:web:21713b281b08aef8f0dbd6"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore()
const auth = firebase.auth()

export { auth };
export default db;
