import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDVg8MnunBygdUh7NZTY3WsDJtZv6bzEQc",
  authDomain: "chat-app-85943.firebaseapp.com",
  projectId: "chat-app-85943",
  storageBucket: "chat-app-85943.appspot.com",
  messagingSenderId: "849111488730",
  appId: "1:849111488730:web:f7e900fe9e374b5e632de3"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();