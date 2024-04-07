import React, { useState, useEffect } from "react";
import '../normalize.css'
import './LoginRegister.css'
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "firebase/auth";
import { auth } from "../FirebaseConfig.js";
import { doc, setDoc } from "firebase/firestore"; // Firestoreを操作するために追加
import { db } from "../FirebaseConfig.js"; // Firestoreインスタンスのimportが必要です
import { Navigate } from "react-router-dom";

import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Register = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");
  const [user, setUser] = useState(""); // state変数「user」を定義

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const visibilityChange = (type) => {
    setPasswordType(type);
    setTimeout(() => {
      setPasswordType("password");
    }, 1000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      // ユーザー作成が成功したら、Firestoreにユーザードキュメントを作成
      await setDoc(doc(db, "users", userCredential.user.uid), {
        email: registerEmail,
        createdAt: new Date() // Firestoreのタイムスタンプではなく、JSのDateオブジェクトを使用
      });
      console.log("ユーザードキュメント作成成功");
    } catch (error) {
      console.error("会員登録失敗", error);
      alert("Password must be at least 6 characters.");
    }
  };

  return (
    <>
      {user ? (
        <Navigate to={`/`} />
      ) : (
        <>
          <h1 className="account-title">登録</h1>
          <div className="input-main">
            <form className="account-form" onSubmit={handleSubmit}>
              <div>
                <label className="input-mail">メールアドレス</label>
                <input
                  className="input-form"
                  name="email"
                  type="email"
                  value={registerEmail}
                  onChange={(e) => setRegisterEmail(e.target.value)}
                />
              </div>
              <div>
                <label className="input-pass">パスワード</label>
                <input
                  className="input-form"
                  name="password"
                  value={registerPassword}
                  type={passwordType}
                  onChange={(e) => setRegisterPassword(e.target.value)}
                />
                {passwordType === "password" && (
                  <VisibilityOffIcon
                    onClick={() => visibilityChange("text")}
                    className="password-icon"
                  />
                )}
                {passwordType === "text" && (
                  <VisibilityIcon
                    onClick={() => visibilityChange("password")}
                    className="password-icon"
                  />
                )}
              </div>
              <button className="create-button">会員登録</button>
            </form>
          </div>
        </>
      )}
    </>  
    );
};

export default Register;
