import { doc, setDoc } from "firebase/firestore"; 
import { db } from "../../FirebaseConfig";

// Add a new document in collection "cities"
await setDoc(doc(db, "cities", "LA"), {
  name: "Los Angeles",
  state: "CA",
  country: "USA"
});