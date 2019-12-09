import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyD_qScsp6Q963YJ3OI06l3jTNqxl5EBiH4",
  authDomain: "crwn-10b14.firebaseapp.com",
  databaseURL: "https://crwn-10b14.firebaseio.com",
  projectId: "crwn-10b14",
  storageBucket: "crwn-10b14.appspot.com",
  messagingSenderId: "315556685487",
  appId: "1:315556685487:web:de6743c7265a2234e7d65a",
  measurementId: "G-34BSB68ZMG"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
