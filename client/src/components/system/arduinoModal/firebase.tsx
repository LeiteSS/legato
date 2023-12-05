import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAD4UHdnAlIOTp6Keju9ZrrqfkNwUBykqI",
    authDomain: "arduino-1917.firebaseapp.com",
    databaseURL: "https://arduino-1917-default-rtdb.firebaseio.com",
    projectId: "arduino-1917",
    storageBucket: "arduino-1917.appspot.com",
    messagingSenderId: "10801259661",
    appId: "1:10801259661:web:afed0f1c01f33a0c652ec4",
    measurementId: "G-TBW45ZSEEJ"
};

const firebase = initializeApp(firebaseConfig);

export default firebase;