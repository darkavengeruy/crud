import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyALvFH-10wEiTQzA1EP5pVjUhY--JA6UWk",
    authDomain: "crud-58f83.firebaseapp.com",
    projectId: "crud-58f83",
    storageBucket: "crud-58f83.appspot.com",
    messagingSenderId: "265871471552",
    appId: "1:265871471552:web:7077319de87ff61f9c8e25"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig)