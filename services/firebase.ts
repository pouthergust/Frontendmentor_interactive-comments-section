// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { useRuntimeConfig } from "nuxt/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Acesse as variáveis de ambiente no Nuxt
const config = useRuntimeConfig()

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: config.public.firebaseApiKey,
  authDomain: config.public.firebaseAuthDomain,
  databaseURL: config.public.firebaseDatabaseUrl,
  projectId: config.public.firebaseProjectId,
  storageBucket: config.public.firebaseStorageBucket,
  messagingSenderId: config.public.firebaseMessagingSenderId,
  appId: config.public.firebaseAppId,
  measurementId: config.public.firebaseMeasurementId
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig as any);

export default firebase
// const analytics = getAnalytics(app);
