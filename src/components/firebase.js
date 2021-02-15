import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyDjhiXeRQTf-N-Nsm6HG7f_uP3VxFc_R1o",
  authDomain: "todo-app-react-5d1b7.firebaseapp.com",
  projectId: "todo-app-react-5d1b7",
  storageBucket: "todo-app-react-5d1b7.appspot.com",
  messagingSenderId: "874525015774",
  appId: "1:874525015774:web:1601ad5a28ee6292c24c4f",
  measurementId: "G-T3CCMR6QLW",
});

const db = firebase.firestore();

export default db;
