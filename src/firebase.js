import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyAVzPS5RBgsTM4-jUs_p-q-lV6bVkjREXU",
    authDomain: "finanzas-21fdb.firebaseapp.com",
    projectId: "finanzas-21fdb",
    storageBucket: "finanzas-21fdb.appspot.com",
    messagingSenderId: "802192413545",
    appId: "1:802192413545:web:fae31ebc19e5497feb23f8",
    measurementId: "G-Q7132R4PVB"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

export { db };
