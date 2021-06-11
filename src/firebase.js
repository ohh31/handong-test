
// import * as firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBnZZnhrd7sVsA3uT1lrtPf7UMQDgVhdYo",
    authDomain: "handong-test.firebaseapp.com",
    projectId: "handong-test",
    storageBucket: "handong-test.appspot.com",
    messagingSenderId: "514924839592",
    appId: "1:514924839592:web:a2ea61a4467ff6755fb89d",
    measurementId: "G-NY161G8BF8"
  };
  
firebase.initializeApp(firebaseConfig);
const firestore = new firebase.firestore();
export { firestore };