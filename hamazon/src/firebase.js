import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC5HP9Wtw6wUmJlDlKDPH8qxzRpMxGcmQA",
    authDomain: "h-f6d7c.firebaseapp.com",
    projectId: "h-f6d7c",
    storageBucket: "h-f6d7c.appspot.com",
    messagingSenderId: "889374558111",
    appId: "1:889374558111:web:69c20eb3e7b3d6d0931faa",
    measurementId: "G-RE2FZMJ588"
});

const db = firebase.firestore();

export default db;