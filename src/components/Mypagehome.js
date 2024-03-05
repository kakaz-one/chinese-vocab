import React from "react";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../FirebaseConfig.js";
import { onAuthStateChanged } from "firebase/auth";
import "../normalize.css";
import "./Mypagehome.css";
import Studygirl from "./images/shigureni-studygirl.png";

const Mypagehome = () => {
  /**
   * ログイン判定
   * @param {string} user - ユーザー情報
   * @param {string} setUser - ユーザー情報を更新
   */
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  return (
    <>
      {!loading && (
        <>
          {!user ? (
            <Navigate to={`/`} />
          ) : (
            <>
              <div className="header-wrapper">
                <h1>中国語を勉強しよう！</h1>
                <img src={Studygirl} alt="studygirl" width={200} height={200} />
                <p>HSKは数ある中国語検定の中でも、中国政府公認の資格です</p>
              </div>
              <div className="bodywhole">
                <div className="row">
                  <a href="/Hsk1">
                    <div className="hsk1">
                      <div className="classstyle">HSK1級</div>
                    </div>
                  </a>
                  <a href="/Hsk2">
                    <div className="hsk2">
                      <div className="classstyle">HSK2級</div>
                    </div>
                  </a>
                </div>
                <div className="row">
                  <a href="/Hsk3">
                    <div className="hsk3">
                      <div className="classstyle">HSK3級</div>
                    </div>
                  </a>
                  <a href="/Hsk4">
                    <div className="hsk4">
                      <div className="classstyle">HSK4級</div>
                    </div>
                  </a>
                </div>
                <div className="row">
                  <a href="/Hsk5">
                    <div className="hsk5">
                      <div className="classstyle">HSK5級</div>
                    </div>
                  </a>
                  <a href="/Hsk6">
                    <div className="hsk6">
                      <div className="classstyle">HSK6級</div>
                    </div>
                  </a>
                </div>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
};

export default Mypagehome;
