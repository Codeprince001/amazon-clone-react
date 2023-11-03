import { initializeApp } from "firebase/app";
import { getStorage, ref } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBrr6qegGaiAk5HmCFaYW4zjmzlCx1iUc4",
  authDomain: "clone-e0e80.firebaseapp.com",
  projectId: "clone-e0e80",
  storageBucket: "clone-e0e80.appspot.com",
  messagingSenderId: "412372118780",
  appId: "1:412372118780:web:445170c6632d54be797b79",
  measurementId: "G-CJK68QGJES"
};

const firebase = initializeApp(firebaseConfig);

const storage = getStorage(firebase);

export { storage, ref as default }; 