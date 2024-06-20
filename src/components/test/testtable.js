import React, { useEffect, useState } from 'react';
import { db } from "../../FirebaseConfig";
import { collection, query, getDocs, orderBy, where } from '@firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const TestTable = () => {
  const [data, setData] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  // Setup Firebase authentication listener
  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, user => {
      setCurrentUser(user);
    });

    return unsubscribe; // Cleanup the subscription
  }, []);

  useEffect(() => {
    if (currentUser) {
      const fetchData = async () => {
        const hskQuerySnapshot = await getDocs(query(collection(db, "HSK1"), orderBy("id")));
        const nomQuerySnapshot = await getDocs(query(collection(db, "NOM"), where("userid", "==", currentUser.uid)));

        const nomData = nomQuerySnapshot.docs.reduce((acc, doc) => {
          acc[doc.data().id] = doc.data().state; // Map of id to state
          return acc;
        }, {});

        const list = hskQuerySnapshot.docs.map(doc => {
          const hskId = doc.data().id;
          return {
            id: hskId,
            chinese: doc.data().chinese,
            pinyin: doc.data().pinyin,
            japanese: doc.data().japanese,
            state: nomData[hskId] || '0' // Check if there's a matching NOM state, else '0'
          };
        });

        setData(list);
      };

      fetchData();
    }
  }, [currentUser]);

  return (
    <div>
      <h1>HSK1 Vocabulary Table</h1>
      <table style={{ border: '3px solid black', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '3px solid black' }}>NOM State</th>
            <th style={{ border: '3px solid black' }}>Chinese</th>
            <th style={{ border: '3px solid black' }}>Pinyin</th>
            <th style={{ border: '3px solid black' }}>Japanese</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td style={{ border: '3px solid black' }}>{item.state}</td>
              <td style={{ border: '3px solid black' }}>{item.chinese}</td>
              <td style={{ border: '3px solid black' }}>{item.pinyin}</td>
              <td style={{ border: '3px solid black' }}>{item.japanese}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestTable;
