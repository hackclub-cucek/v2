import firebase from "firebase";
import 'firebase/storage'

export const app = firebase.initializeApp({
    "projectId": "for-form-club",
    "appId": "1:90788475192:web:028b8b4433e291af1211cd",
    "storageBucket": "for-form-club.appspot.com",
    "locationId": "us-central",
    "apiKey": "AIzaSyBrJkpxK_m6Qu63J5psTNRBNetHiFlut-I",
    "authDomain": "for-form-club.firebaseapp.com",
    "messagingSenderId": "90788475192"
  });