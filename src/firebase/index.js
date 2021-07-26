import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAIgWESadv9yMy3w9WiR6Om3BUHBKDeyt8",
    authDomain: "coderhouse-cadf2.firebaseapp.com",
    projectId: "coderhouse-cadf2",
    storageBucket: "coderhouse-cadf2.appspot.com",
    messagingSenderId: "468812994620",
    appId: "1:468812994620:web:8f120512464db47e2c8b39"
};

const app = firebase.initializeApp(firebaseConfig)

export function getFirebase(){
    return app;
}

export function getFirestore(){
    return firebase.firestore(app)
}