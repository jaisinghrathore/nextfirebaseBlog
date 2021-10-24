import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

var firebaseConfig = {
  apiKey: "AIzaSyBsWVcaQz9jkpugr8bMZNEqWRj_MERAs2M",
  authDomain: "nextjsblogfirebase.firebaseapp.com",
  projectId: "nextjsblogfirebase",
  storageBucket: "nextjsblogfirebase.appspot.com",
  messagingSenderId: "236818944732",
  appId: "1:236818944732:web:5aafa78f8ed5dbceff9a19"
  };


if(!firebase.apps.length) firebase.initializeApp(firebaseConfig)


const auth  = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()
const serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;

export {auth,db,storage,serverTimestamp}


