// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYPKGXNJTPkzfjvUcxJU0OIEAjkSFsAp0",
  authDomain: "workeasy-d6ddc.firebaseapp.com",
  projectId: "workeasy-d6ddc",
  storageBucket: "workeasy-d6ddc.appspot.com",
  messagingSenderId: "415323851149",
  appId: "1:415323851149:web:7526cfc5c6ac2ebbc455c4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
