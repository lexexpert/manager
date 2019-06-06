import React from 'react';
import firebase from 'firebase';

const FirebaseConfig = () => {
  return (
    firebase.initializeApp({
      apiKey: "AIzaSyDiFfb85_wo5gLmoQBxhC4330mblaZc3R8",
      authDomain: "manager-8d6a2.firebaseapp.com",
      databaseURL: "https://manager-8d6a2.firebaseio.com",
      projectId: "manager-8d6a2",
      storageBucket: "manager-8d6a2.appspot.com",
      messagingSenderId: "546115698429",
      appId: "1:546115698429:web:32dbaa9b5462ba75"
    })
  )
};

export default FirebaseConfig;
