// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD7aJuzVjhj4yFXW3rw0OQ0mfAhe2ZR2xg",
  authDomain: "the-news-dragon-bafbb.firebaseapp.com",
  projectId: "the-news-dragon-bafbb",
  storageBucket: "the-news-dragon-bafbb.appspot.com",
  messagingSenderId: "115959895672",
  appId: "1:115959895672:web:7e3f3c4bc9a1b0c9a07f8d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;