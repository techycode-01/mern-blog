// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-771c0.firebaseapp.com",
  projectId: "mern-blog-771c0",
  storageBucket: "mern-blog-771c0.firebasestorage.app",
  messagingSenderId: "976049509546",
  appId: "1:976049509546:web:78eb2862b45ecffefcecd3",
  measurementId: "G-QLYMK3JYSF"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);