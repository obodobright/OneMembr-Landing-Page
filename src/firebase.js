import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const config = {
    apiKey: "AIzaSyB47uuoiZ_G9d2vXUXOoykNcbxZjMO8qvQ",
    authDomain: "onemembr-d69a7.firebaseapp.com",
    projectId: "onemembr-d69a7",
    storageBucket: "onemembr-d69a7.appspot.com",
    messagingSenderId: "251146984539",
    appId: "1:251146984539:web:313e87b0cf9c5215cff37e",
};
export const app = initializeApp(config);
export const firestore = getFirestore();

//  apiKey: "AIzaSyC-94MUnyv70X8sH-bWqRDksJeY3Eik2so",
//   authDomain: "onemembrweb.firebaseapp.com",
//   projectId: "onemembrweb",
//   storageBucket: "onemembrweb.appspot.com",
//   messagingSenderId: "917975007203",
//   appId: "1:917975007203:web:26b98d9d0d5eeb50256ad6",
//   measurementId: "G-8QT4MCWMYY"