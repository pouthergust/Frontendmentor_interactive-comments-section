// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Acesse as variáveis de ambiente no Nuxt

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.firebaseApiKey,
  authDomain: process.env.firebaseAuthDomain,
  databaseURL: process.env.firebaseDatabaseUrl,
  projectId: process.env.firebaseProjectId,
  storageBucket: process.env.firebaseStorageBucket,
  messagingSenderId: process.env.firebaseMessagingSenderId,
  appId: process.env.firebaseAppId,
  measurementId: process.env.firebaseMeasurementId
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig as any);

export default firebase
// const analytics = getAnalytics(app);
