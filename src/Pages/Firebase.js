// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvGqfpKguNxOZMa_p_2wb4bfdJ95PRDaM",
  authDomain: "chaintech-assignment.firebaseapp.com",
  projectId: "chaintech-assignment",
  storageBucket: "chaintech-assignment.appspot.com",
  messagingSenderId: "276991894979",
  appId: "1:276991894979:web:2197f932069e03f8b1c976"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export default app;