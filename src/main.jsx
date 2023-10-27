import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initializeApp } from "firebase/app";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);


const firebaseConfig = {
  apiKey: "AIzaSyBrr6qegGaiAk5HmCFaYW4zjmzlCx1iUc4",
  authDomain: "clone-e0e80.firebaseapp.com",
  projectId: "clone-e0e80",
  storageBucket: "clone-e0e80.appspot.com",
  messagingSenderId: "412372118780",
  appId: "1:412372118780:web:445170c6632d54be797b79",
  measurementId: "G-CJK68QGJES"
};

initializeApp(firebaseConfig);

