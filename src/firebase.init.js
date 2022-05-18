// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADmiRzGXXOfVMxppY9Ul7phJlMGiz_s6A",
  authDomain: "job-potal-c6478.firebaseapp.com",
  projectId: "job-potal-c6478",
  storageBucket: "job-potal-c6478.appspot.com",
  messagingSenderId: "673011200400",
  appId: "1:673011200400:web:ebe1886f4a3c208e7ec315"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;