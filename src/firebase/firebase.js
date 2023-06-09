import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyC-9iLFLDMiG1uVguMeJKNkdsZObIzWtrE',
  authDomain: 'react-app-curso-a2075.firebaseapp.com',
  databaseURL: 'https://react-app-curso-a2075.firebaseio.com',
  projectId: 'react-app-curso-a2075',
  storageBucket: 'react-app-curso-a2075.appspot.com',
  messagingSenderId: '925862903414',
  appId: '1:925862903414:web:e7bb11952895b25e7c6957',
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
