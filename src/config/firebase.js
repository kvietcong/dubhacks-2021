import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBwh7PNoMZgS1yFyRbNk3CDG06BIkryclU",
  authDomain: "dubhacks2021.firebaseapp.com",
  projectId: "dubhacks2021",
  storageBucket: "dubhacks2021.appspot.com",
  messagingSenderId: "676692240808",
  appId: "1:676692240808:web:682b7053a93ddfb234559d",
  measurementId: "G-XWBMK3ET7W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { app, db };