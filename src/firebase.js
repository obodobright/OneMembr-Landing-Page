import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyC-94MUnyv70X8sH-bWqRDksJeY3Eik2so",
    authDomain: "onemembrweb.firebaseapp.com",
    projectId: "onemembrweb",
    storageBucket: "onemembrweb.appspot.com",
    messagingSenderId: "917975007203",
    appId: "1:917975007203:web:26b98d9d0d5eeb50256ad6",
    measurementId: "G-8QT4MCWMYY",
};
export const app = initializeApp(config);
export const firestore = getFirestore();