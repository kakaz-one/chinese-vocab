import React, { useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { db } from "../../FirebaseConfig";




const CreateUserDB = () => {
  useEffect(() => {
    // ログイン状態が変更されたときに発火するリスナー
    const unsubscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        // ログインしているユーザーの情報をFirestoreから取得
        const userRef = firebase.firestore().collection('users').doc(user.uid);
        const doc = await userRef.get();
        if (!doc.exists) {
          // ユーザーのドキュメントが存在しない場合は新規作成
          userRef.set({
            // ユーザー情報の初期データ（必要に応じてカスタマイズ）
            name: user.displayName,
            email: user.email,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          }).then(() => {
            console.log('新規ユーザードキュメント作成完了');
          }).catch(error => {
            console.error('ユーザードキュメントの作成に失敗しました', error);
          });
        }
      } else {
        // ユーザーがログアウト状態の処理（必要に応じて）
        console.log('ユーザーはログアウトしています');
      }
    });

    // クリーンアップ関数
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h1>React Firebase Auth & Firestore Example</h1>
      {/* ログインフォームなどのUIコンポーネント */}
    </div>
  );
};

export default CreateUserDB;
