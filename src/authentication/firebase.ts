import config from './config';
import { getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

export const firebaseApp = initializeApp(config);
export const firebaseDB = getDatabase(firebaseApp);
export const firestoreDB = getFirestore(firebaseApp);

export const firebaseAuth = getAuth();



