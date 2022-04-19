// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore, doc, getDoct } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC-_4ANiSc6gtcjfJkR0XglgeXYtyXdNbo',
  authDomain: 'lukaschat42.firebaseapp.com',
  projectId: 'lukaschat42',
  storageBucket: 'lukaschat42.appspot.com',
  messagingSenderId: '311985803149',
  appId: '1:311985803149:web:a48656cb8df79fa92277c4',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

async function loadCity(name) {
  
}
