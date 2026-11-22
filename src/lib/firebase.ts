import { initializeApp, getApps, getApp, type FirebaseApp, type FirebaseOptions } from 'firebase/app';
import { getAuth, type Auth } from 'firebase/auth';
import { getFirestore, type Firestore } from 'firebase/firestore';

const firebaseConfig: FirebaseOptions = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Initialize Firebase only if an API key is provided
const isConfigured = Boolean(firebaseConfig.apiKey && firebaseConfig.projectId);

export const app: FirebaseApp = getApps().length > 0
  ? getApp()
  : initializeApp(isConfigured ? firebaseConfig : {
      apiKey: 'placeholder-key',
      authDomain: 'placeholder.firebaseapp.com',
      projectId: 'placeholder-project',
      storageBucket: 'placeholder.appspot.com',
      messagingSenderId: '000000000000',
      appId: '1:000000000000:web:000000000000',
    });

export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export const isFirebaseConfigured = (): boolean => isConfigured;

export default { app, auth, db, isFirebaseConfigured };
