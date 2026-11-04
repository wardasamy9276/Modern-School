import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCGAqSFNM1e-2VjWYFo76DgJlrxRdTqACs",
  authDomain: "rowad-modern-school.firebaseapp.com",
  projectId: "rowad-modern-school",
  storageBucket: "rowad-modern-school.firebasestorage.app",
  messagingSenderId: "1051052226497",
  appId: "1:1051052226497:web:ad1ed02bd7b09ee8ec2140",
  measurementId: "G-F9LLYVDZSL"
};

const app = getApps().length === 0
  ? initializeApp(firebaseConfig)
  : getApps()[0];

export const auth = getAuth(app);

export default app;