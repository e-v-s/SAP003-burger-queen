import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyDoa-vZyl9PIQnZTMjPj3NyHS1vHJXAw0U",
    authDomain: "burger-queen-c6a6b.firebaseapp.com",
    databaseURL: "https://burger-queen-c6a6b.firebaseio.com",
    projectId: "burger-queen-c6a6b",
    storageBucket: "burger-queen-c6a6b.appspot.com",
    messagingSenderId: "1062470969789",
    appId: "1:1062470969789:web:109ac293aad69adc10cad4"
  };

export const firebaseImpl = firebase.initializeApp(firebaseConfig)
export const db = firebase.firestore()