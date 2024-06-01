import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCb8MQfdB_u6FNA6b245woFIg9CYoH6u3k",
    authDomain: "mental-maven.firebaseapp.com",
    projectId: "mental-maven",
    storageBucket: "mental-maven.appspot.com",
    messagingSenderId: "537017464888",
    appId: "1:537017464888:web:66f4458aa11a5775c9cecd"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
