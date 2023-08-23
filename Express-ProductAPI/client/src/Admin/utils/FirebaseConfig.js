import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: "AIzaSyDULHo4WgLPTzrW0dob44XBgM3tgYnSq28",
  authDomain: "bq-express-api.firebaseapp.com",
  projectId: "bq-express-api",
  storageBucket: "bq-express-api.appspot.com",
  messagingSenderId: "359484021249",
  appId: "1:359484021249:web:ac30a1bf8d339ce17afe00"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
