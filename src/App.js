import './App.css';
import React from 'react';

// 色々import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Mypagehome from "./components/Mypagehome";
import Mypage from "./components/Mypage";
import Hsk1 from './components/Hsk1';
import Hsk2 from './components/Hsk2';
import Hsk3 from './components/Hsk3';
import Hsk4 from './components/Hsk4';
import Hsk5 from './components/Hsk5';
import Hsk6 from './components/Hsk6';



// firebase.jsをインポート
//import { auth, provider } from "./firebase";
 //import {signInWithPopup} from "firebase/auth";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path={`${process.env.PUBLIC_URL}/register/`} element={<Register />} />
          <Route path={`${process.env.PUBLIC_URL}/`} element={<Login />} />
          <Route path={`${process.env.PUBLIC_URL}/mypagehome`} element={<Mypagehome />} />
          <Route path={`${process.env.PUBLIC_URL}/my-page`} element={<Mypage />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk1`} element={<Hsk1 />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk2`} element={<Hsk2 />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk3`} element={<Hsk3 />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk4`} element={<Hsk4 />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk5`} element={<Hsk5 />} />
          <Route path={`${process.env.PUBLIC_URL}/Hsk6`} element={<Hsk6 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;