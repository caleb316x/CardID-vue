import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

import Logo from './assets/logo.svg'

createApp(App).mount('#app')

// // Import the functions you need from the SDKs you need
// const firebaseConfig = {
//   apiKey: "AIzaSyBnhngJptLjNN8MXXOazsM8heUIu0Ap16E",
//   authDomain: "ciodb-d2d5a.firebaseapp.com",
//   projectId: "ciodb-d2d5a",
//   storageBucket: "ciodb-d2d5a.appspot.com",
//   messagingSenderId: "683415735066",
//   appId: "1:683415735066:web:ea4bccfa31dc29f587faa3",
//   measurementId: "G-VH7JZ0MLPC"
// };

// import { initializeApp } from 'firebase/app';
// import { getFirestore, collection, addDoc } from 'firebase/firestore';
// import { getAnalytics } from "firebase/analytics";
// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// // Get a reference to the Firestore database
// const db = getFirestore(app);



// var userData = {
//   first_name: "Den Caleb",
//   last_name: "Sanchez",
//   gender: "Brother",
//   locality: "Ormoc City"
// };

// const usersCollection = collection(db, 'saints');

// console.log(usersCollection);
// // Add a new document with a generated ID
// addDoc(usersCollection, userData)
//   .then(docRef => {
//     console.log("Document written with ID: ", docRef.id);
//   })
//   .catch(error => {
//     console.error("Error adding document: ", error);
//   });