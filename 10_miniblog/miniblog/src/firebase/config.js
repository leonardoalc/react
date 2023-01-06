import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCH1rtkKNx3dgXgVT28lbvvGpB5XCoUt-s",
  authDomain: "miniblog-95ddb.firebaseapp.com",
  projectId: "miniblog-95ddb",
  storageBucket: "miniblog-95ddb.appspot.com",
  messagingSenderId: "619813760144",
  appId: "1:619813760144:web:95d5bb649bef18b9bdbc15"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };