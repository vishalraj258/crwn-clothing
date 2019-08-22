import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBf23adt5RQvOwmAPLaiFITGteiJCgB8hs",
  authDomain: "crwn-db-60be8.firebaseapp.com",
  databaseURL: "https://crwn-db-60be8.firebaseio.com",
  projectId: "crwn-db-60be8",
  storageBucket: "",
  messagingSenderId: "468575225948",
  appId: "1:468575225948:web:e9f5eb795817bade"
}; 

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;