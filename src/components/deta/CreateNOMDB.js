import React from 'react';
// Import collection and addDoc from firebase/firestore instead of from '@firebase/firestore'
import { collection, addDoc } from 'firebase/firestore';

// Make sure db is correctly imported from FirebaseConfig
import { db } from "../../FirebaseConfig";

const AddNOMDataToDBComponent = () => {
  const addNOMDataToDB = async () => {
    try {
      // Use collection and addDoc for Modular SDK
      const docRef = await addDoc(collection(db, 'NOM'), {
        name: 'Sample Name', // Your data fields
      });
      console.log('Document written with ID: ', docRef.id);
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <div>
      <h1>Firestoreに間違えた回数をカウントするコレクションを追加する</h1>
      <button onClick={addNOMDataToDB}>データを追加する</button>
    </div>
  );
};

export default AddNOMDataToDBComponent;
