// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, set, get } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//protect this later on
const firebaseConfig = {
  apiKey: "AIzaSyA-VDIvAN6243HECBhJFFdiovuT2ucSbt4",
  authDomain: "coachart-4d202.firebaseapp.com",
  projectId: "coachart-4d202",
  storageBucket: "coachart-4d202.appspot.com",
  messagingSenderId: "772850122813",
  appId: "1:772850122813:web:0046ae63c010d7e60e2a54",
  measurementId: "G-0DVFVPYYBW",
  databaseURL: "https://coachart-4d202-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

//realtime database
const database = getDatabase(app);

//basic operation functions

export function write(location: string, value: unknown) {
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
