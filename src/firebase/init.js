import firebase from 'firebase'
import firestore from 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyD7mKnoEOieZYXHeIjqyMHEIG_7eydjjA0",
    authDomain: "uncle-geo.firebaseapp.com",
    databaseURL: "https://uncle-geo.firebaseio.com",
    projectId: "uncle-geo",
    storageBucket: "uncle-geo.appspot.com",
    messagingSenderId: "881352068977",
    appId: "1:881352068977:web:899a6f39f84fe3b1"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore();