import React, { useEffect } from 'react';
import { db } from "../../FirebaseConfig";
import { collection, doc, setDoc } from '@firebase/firestore';

const Createhsk1DB = () => {
  const HSK1 = [
    {
      "hskclass": "1",
      "japanese": "愛する",
      "chinese": "爱",
      "pinyin": "ài"
    },
    {
      "hskclass": "1",
      "japanese": "八",
      "chinese": "八",
      "pinyin": "bā"
    },
    {
      "hskclass": "1",
      "japanese": "お父さん",
      "chinese": "爸爸",
      "pinyin": "bàba"
    }
  ];

  useEffect(() => {
    const addData = async () => {
      const promises = HSK1.map((item, index) => {
        const docRef = doc(collection(db, "HSK1"), `item-${index}`);
        return setDoc(docRef, item);
      });

      try {
        await Promise.all(promises);
        console.log("All documents were successfully written.");
      } catch (error) {
        console.error("Error adding documents: ", error);
      }
    };

    addData();
  }, []);

  return (
    <div>
      <h1>Firestoreにデータを追加しました</h1>
    </div>
  );
};

export default Createhsk1DB;
