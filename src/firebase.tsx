// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get, update } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//protect this later on
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
  databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
};

console.log("firebase Config:", firebaseConfig);

// Initialize Firebase
try {
  const app = initializeApp(firebaseConfig);
} catch (error) {
  console.error("Error initializing Firebase:", error);
}

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//realtime database
export const database = getDatabase(app);

//authentication
export const auth = getAuth(app);
console.log("auth:", auth);
console.log("current user:", auth.currentUser);
//basic operation functions

export async function write(location: string, value: unknown) {
  try {
    await set(ref(database, location), value);
    console.log("write successful");
  } catch (error) {
    console.error("Error writing to database:", error);
  }
}

export async function read(location: string) {
  const data = ref(database, location);
  try {
    const snapshot = await get(data);
    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data");
    }
  } catch (error) {
    console.error(error);
  }
  return null;
}

export async function updateData(location: string, value: any): Promise<void> {
  try {
    await update(ref(database, location), value);
    return Promise.resolve();
  } catch (error) {
    return Promise.reject(error);
  }
}

export async function getAdmin() {
  const user = auth.currentUser;
  if (user) {
    return user;
  } else {
    throw new Error("No logged-in user");
  }
}
