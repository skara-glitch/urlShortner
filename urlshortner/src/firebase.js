import firebase from "firebase"
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDLo3hz0TGwF_IMXUOH1wDwOdu59uweuiE",
    authDomain: "urlshortner-f11e0.firebaseapp.com",
    projectId: "urlshortner-f11e0",
    storageBucket: "urlshortner-f11e0.appspot.com",
    messagingSenderId: "412577269571",
    appId: "1:412577269571:web:2d8ff8510c1165498951f6",
    measurementId: "G-RE495FCWRG"
  };
  const app = firebase.initializeApp(firebaseConfig);
  export const db = app.firestore();