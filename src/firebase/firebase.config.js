// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB9TvPmn_IvPdxyFkbm4LNqCRZ9oV5oVUU",
    authDomain: "rent-your-wheels.firebaseapp.com",
    projectId: "rent-your-wheels",
    storageBucket: "rent-your-wheels.firebasestorage.app",
    messagingSenderId: "271678649430",
    appId: "1:271678649430:web:3a9578a4c0d161e109f7f7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
