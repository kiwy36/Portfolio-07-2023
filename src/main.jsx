import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';
import { BrowserRouter } from 'react-router-dom';


import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyAlgztwIEMrmv59PNf5xEfDhILZzTQrakE",
  authDomain: "indumentaria-e6763.firebaseapp.com",
  databaseURL: "https://indumentaria-e6763-default-rtdb.firebaseio.com",
  projectId: "indumentaria-e6763",
  storageBucket: "indumentaria-e6763.appspot.com",
  messagingSenderId: "629294298408",
  appId: "1:629294298408:web:70db1e4e46386d09be4c1d",
  measurementId: "G-SP3EPGXQ65"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
