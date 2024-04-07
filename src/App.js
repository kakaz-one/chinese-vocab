import './App.css';
import React from 'react';

// 色々import
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Register from "./components/Register";
import Login from "./components/Login";
import Mypagehome from "./components/Mypagehome";
import Mypage from "./components/Mypage";
import CreateHSK1DB from "./components/deta/CreateDBhsk1";
import HSK1test from "./components/test/hsk1test";
import HSK1test2 from "./components/test/hsk1test2";
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
          <Route path={`/register/`} element={<Register />} />
          <Route path={`/`} element={<Login />} />
          <Route path={`/mypagehome`} element={<Mypagehome />} />
          <Route path={`/my-page`} element={<Mypage />} />
          <Route path={`/Hsk1`} element={<Hsk1 />} />
          <Route path={`/Hsk2`} element={<Hsk2 />} />
          <Route path={`/Hsk3`} element={<Hsk3 />} />
          <Route path={`/Hsk4`} element={<Hsk4 />} />
          <Route path={`/Hsk5`} element={<Hsk5 />} />
          <Route path={`/Hsk6`} element={<Hsk6 />} />
          <Route path={`/createHSK1DB`} element={<CreateHSK1DB />} />
          <Route path={`/hsk1test`} element={<HSK1test />} />
          <Route path={`/hsk1test2`} element={<HSK1test2 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;