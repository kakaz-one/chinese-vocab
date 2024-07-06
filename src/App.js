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
import CreateNOMDB from "./components/deta/CreateNOMDB";
import Vocablist from './components/vocablist/vocadlist';
import Hsk1FC from './components/FC/Hsk1FC';
import Hsk2FC from './components/FC/Hsk2FC';
import Hsk3FC from './components/FC/Hsk3FC';
import Hsk4FC from './components/FC/Hsk4FC';
import Hsk5FC from './components/FC/Hsk5FC';
import Hsk6FC from './components/FC/Hsk6FC';
import Hsk1MCQ from './components/MCQ/Hsk1MCQ';
import Hsk2MCQ from './components/MCQ/Hsk2MCQ';
import Hsk3MCQ from './components/MCQ/Hsk3MCQ';
import Hsk4MCQ from './components/MCQ/Hsk4MCQ';
import Hsk5MCQ from './components/MCQ/Hsk5MCQ';
import Hsk6MCQ from './components/MCQ/Hsk6MCQ';
import Hsk1MCQandFC from './components/MCQandFC/Hsk1MCQandFC';
import Hsk2MCQandFC from './components/MCQandFC/Hsk2MCQandFC';
import Hsk3MCQandFC from './components/MCQandFC/Hsk3MCQandFC';
import Hsk4MCQandFC from './components/MCQandFC/Hsk4MCQandFC';
import Hsk5MCQandFC from './components/MCQandFC/Hsk5MCQandFC';
import Hsk6MCQandFC from './components/MCQandFC/Hsk6MCQandFC';
import CreatehskDB from './components/deta/CreateDBhskall';


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
          <Route path={`/Hsk1FC`} element={<Hsk1FC />} />
          <Route path={`/Hsk2FC`} element={<Hsk2FC />} />
          <Route path={`/Hsk3FC`} element={<Hsk3FC />} />
          <Route path={`/Hsk4FC`} element={<Hsk4FC />} />
          <Route path={`/Hsk5FC`} element={<Hsk5FC />} />
          <Route path={`/Hsk6FC`} element={<Hsk6FC />} />
          <Route path={`/Hsk1MCQ`} element={<Hsk1MCQ />} />
          <Route path={`/Hsk2MCQ`} element={<Hsk2MCQ />} />
          <Route path={`/Hsk3MCQ`} element={<Hsk3MCQ />} />
          <Route path={`/Hsk4MCQ`} element={<Hsk4MCQ />} />
          <Route path={`/Hsk5MCQ`} element={<Hsk5MCQ />} />
          <Route path={`/Hsk6MCQ`} element={<Hsk6MCQ />} />
          <Route path={`/Hsk1MCQandFC`} element={<Hsk1MCQandFC />} />
          <Route path={`/Hsk2MCQandFC`} element={<Hsk2MCQandFC />} />
          <Route path={`/Hsk3MCQandFC`} element={<Hsk3MCQandFC />} />
          <Route path={`/Hsk4MCQandFC`} element={<Hsk4MCQandFC />} />
          <Route path={`/Hsk5MCQandFC`} element={<Hsk5MCQandFC />} />
          <Route path={`/Hsk6MCQandFC`} element={<Hsk6MCQandFC />} />

          <Route path={`/createHSK1DB`} element={<CreateHSK1DB />} />
          <Route path={`/hsk1test`} element={<HSK1test />} />
          <Route path={`/hsk1test2`} element={<HSK1test2 />} />
          <Route path={`/Vocablist`} element={<Vocablist />} />
          <Route path={`/createNOMDB`} element={<CreateNOMDB />} />
          <Route path={`/createhskDB`} element={<CreatehskDB />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;