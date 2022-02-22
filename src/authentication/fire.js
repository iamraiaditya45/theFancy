import firebase, { initializeApp } from 'firebase/app'
import {getAuth, createUserWithEmailAndPassword } from 'firebase/auth'

  const firebaseConfig = {
    apiKey: "AIzaSyBgl1l1RnUL2nCobTjPd_LNWq_UDXdKuPI",
    authDomain: "thefancy-3e4f8.firebaseapp.com",
    projectId: "thefancy-3e4f8",
    storageBucket: "thefancy-3e4f8.appspot.com",
    messagingSenderId: "371360495033",
    appId: "1:371360495033:web:f9f74598c7765a044c7268"
  };
  
  const app=initializeApp(firebaseConfig);
const auth = getAuth(app);

export function signup(email,password){
    return createUserWithEmailAndPassword(auth,email,password);
}