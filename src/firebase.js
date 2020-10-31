import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGY-6gunjiQplY5qE_U8WZX4ch81ARlNQ",
    authDomain: "fir-326d9.firebaseapp.com",
    databaseURL: "https://fir-326d9.firebaseio.com",
    projectId: "fir-326d9",
    storageBucket: "fir-326d9.appspot.com",
    messagingSenderId: "845969726214",
    appId: "1:845969726214:web:378a205d801980a5ff9c87",
    measurementId: "G-B6DJKTJJDG",
});

const auth = firebase.auth(); 

export { auth };