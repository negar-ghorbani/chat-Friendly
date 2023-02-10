import { initializeApp } from "firebase/app";

/**
 * To find your Firebase config object:
 * 
 * 1. Go to your [Project settings in the Firebase console](https://console.firebase.google.com/project/_/settings/general/)
 * 2. In the "Your apps" card, select the nickname of the app for which you need a config object.
 * 3. Select Config from the Firebase SDK snippet pane.
 * 4. Copy the config object snippet, then add it here.
 */
const config = {
  /* TODO: ADD YOUR FIREBASE CONFIGURATION OBJECT HERE */
  apiKey: "AIzaSyDoy07ROybbIXCBDzNC3Ua6yNoUrCRrzog",
  authDomain: "friendly-chat-app-b1e57.firebaseapp.com",
  projectId: "friendly-chat-app-b1e57",
  storageBucket: "friendly-chat-app-b1e57.appspot.com",
  messagingSenderId: "337757040410",
  appId: "1:337757040410:web:8cd9656a3a546afbf206a3"
};

export function getFirebaseConfig() {
  if (!config || !config.apiKey) {
    throw new Error('No Firebase configuration object provided.' + '\n' +
      'Add your web app\'s configuration object to firebase-config.js');
  } else {
    return config;
  }
}
const app = initializeApp(config);