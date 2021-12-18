import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {

    apiKey: "AIzaSyBn7upMzS00ISfrJrkl_FYpwSMDVtsPbaQ",
  
    authDomain: "fir-pract-36a51.firebaseapp.com",
  
    projectId: "fir-pract-36a51",
  
    storageBucket: "fir-pract-36a51.appspot.com",
  
    messagingSenderId: "389627375282",
  
    appId: "1:389627375282:web:3e873865c4c422510da3ab",
  
    measurementId: "G-JH7S50V4H0"
  
  };
  

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
export default firebase.storage();