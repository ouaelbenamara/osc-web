// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9A3zr3YL0nzMkfvYjdGTFOiKjUxuK7yc",
  authDomain: "open-source-club.firebaseapp.com",
  databaseURL: "https://open-source-club-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "open-source-club",
  storageBucket: "open-source-club.appspot.com",
  messagingSenderId: "129701988932",
  appId: "1:129701988932:web:3eadf4d3b38eb8b3ba8a11",
  measurementId: "G-BCR8K6E2B3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Export App
export { app };