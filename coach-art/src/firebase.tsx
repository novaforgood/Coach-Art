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
  apiKey: "AIzaSyBAd_Dh9lgjkyli_7mMaCzCVVNoEO2BrjU",
  authDomain: "coach-art.firebaseapp.com",
  projectId: "coach-art",
  storageBucket: "coach-art.appspot.com",
  messagingSenderId: "216034756869",
  appId: "1:216034756869:web:4a65d9b7154e3a4c4acf6c",
  measurementId: "G-JS8EF3YCB4", //add database url !!
  databaseURL: "https://coach-art-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//realtime database
export const database = getDatabase(app);

//authentication
export const auth = getAuth(app);

//basic operation functions

export async function write(location: string, value: unknown) {
  set(ref(database, location), value);
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
