import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAopaatmfsvYB8golVi4em27i_fgjMFef4",
    authDomain: "your-twitter.firebaseapp.com",
    projectId: "your-twitter",
    storageBucket: "your-twitter.appspot.com",
    messagingSenderId: "454472783324",
    appId: "1:454472783324:web:3dcfc1eeb3079662ceeb19"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;