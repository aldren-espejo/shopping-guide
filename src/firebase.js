// import initializeApp function from firebase
import {initializeApp} from 'firebase';

// set firebase connection
const app = initializeApp({
    apiKey: "AIzaSyAdr3s_8LSbiPmwLpgRG3XjH8Szic0AwG4",
    authDomain: "shopping-guide-d98a7.firebaseapp.com",
    databaseURL: "https://shopping-guide-d98a7.firebaseio.com",
    projectId: "shopping-guide-d98a7",
    storageBucket: "shopping-guide-d98a7.appspot.com",
    messagingSenderId: "806761559198"
});

export const db = app.database();

// get list of categories from databse
export const categoriesRef = db.ref('categories');