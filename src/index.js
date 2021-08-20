import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import firebase from "firebase/app";


firebase.initializeApp({
  apiKey: "AIzaSyCie95HZ-7XhVGvtVmdaP6qA8ZwqMYrlkQ",
  authDomain: "hostel-as.firebaseapp.com",
  projectId: "hostel-as",
  storageBucket: "hostel-as.appspot.com",
  messagingSenderId: "91700502017",
  appId: "1:91700502017:web:f1469a8f1db3c40184aa00",
  measurementId: "G-G2GKVCLKY7"
});

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
