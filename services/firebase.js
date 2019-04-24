import firebase from 'firebase'
//import 'firebase/firestore'
import 'firebase/storage'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyBinAEt-8jyawblW8rCqmU5cRwEnGvVLPE",
    authDomain: "nuxt-7dafb.firebaseapp.com",
    databaseURL: "https://nuxt-7dafb.firebaseio.com",
    projectId: "nuxt-7dafb",
    storageBucket: "nuxt-7dafb.appspot.com",
    messagingSenderId: "896090762165"
  };

if (!firebase.apps.length) {
    firebase.initializeApp(config);
}
const db = firebase.firestore()
const storage = firebase.storage().ref()

export default firebase
export {
    db,
    storage
}

