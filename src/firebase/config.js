import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAs8duDcCbhunNcDsXhDrvlGQibSDlX0PA",
  authDomain: "miniblog-1fadf.firebaseapp.com",
  projectId: "miniblog-1fadf",
  storageBucket: "miniblog-1fadf.appspot.com",
  messagingSenderId: "416339379206",
  appId: "1:416339379206:web:f88029cec1de5e27b5ef87",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
