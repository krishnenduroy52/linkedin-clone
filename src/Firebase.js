import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"
const firebaseConfig = {
    apiKey: "AIzaSyDD55BVHyetq3ow4bGRgJLquc8ZGLp-ofI",
    authDomain: "linked-clone-af54f.firebaseapp.com",
    projectId: "linked-clone-af54f",
    storageBucket: "linked-clone-af54f.appspot.com",
    messagingSenderId: "76478121146",
    appId: "1:76478121146:web:be096fe29dfeb9d93fae83"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();


// const db = getFirestore(firebaseApp);
// const stroage = firebaseApp.storage();