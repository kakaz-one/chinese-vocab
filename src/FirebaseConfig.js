import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";


import { getFirestore } from "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCePDoc8C1UgDFFS21z3ELrXqTDZVbhka0",
  authDomain: "react-chinesevocab.firebaseapp.com",
  projectId: "react-chinesevocab",
  storageBucket: "react-chinesevocab.appspot.com",
  messagingSenderId: "986433329556",
  appId: "1:986433329556:web:6ff1d0ec042a427ebb9781"

};

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);


const db = getFirestore(app);
export { db };
//

export const auth = getAuth(app);