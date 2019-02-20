import * as firebase from 'firebase/app';

const config = {
    apiKey: "AIzaSyA8takheUlMOiO-DywvP0wGABJ3YIrBqXk",
    authDomain: "react-portfolio-a82fc.firebaseapp.com",
    databaseURL: "https://react-portfolio-a82fc.firebaseio.com",
    projectId: "react-portfolio-a82fc",
    storageBucket: "react-portfolio-a82fc.appspot.com",
    messagingSenderId: "791601657025"
};

const Firebase = firebase.initializeApp(config);

export default Firebase;