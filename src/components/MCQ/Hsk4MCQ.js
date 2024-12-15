import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, where, addDoc , doc, getDoc, updateDoc, setDoc} from 'firebase/firestore';
import { db } from '../../FirebaseConfig';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// Firebase Authenticationの機能をインポート

import { Button, Box, Typography, CircularProgress, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import './HskMCQ.css';

const Hsk4MCQ = () => {
  const [data, setData] = useState([]);
  const [questions, setQuestions] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [skippedQuestions, setSkippedQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [circleColor, setCircleColor] = useState('');
  const [userId, setUserId] = useState('');
  // ログインユーザーのIDを保存するステート


  const totalQuestions = 10;

  const generateRandomNumbers = (min, max, count) => {
    const numbers = new Set();
    while (numbers.size < count) {
      const random = Math.floor(Math.random() * (max - min + 1)) + min;
      numbers.add(random);
    }
    return [...numbers];
  };

  const shuffleOptions = useCallback((correctOption, data) => {
    if (!data || data.length === 0) return [];
    let options = [correctOption];
    while (options.length < 4) {
      const option = data[Math.floor(Math.random() * data.length)].japanese;
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    return options.sort(() => 0.5 - Math.random());
  }, []);

  const generateQuestions = useCallback((questionsData, incorrectData) => {
    const generatedQuestions = questionsData.map((item) => ({
      ...item,
      options: shuffleOptions(item.japanese, incorrectData),
    }));
    setQuestions(generatedQuestions);
  }, [shuffleOptions]);

  const fetchData = useCallback(async () => {
    try {
      const querySnapshot = await getDocs(
        query(
          collection(db, 'HSK'),
          where('id', '>=', 606),
          where('id', '<=', 1205)
        )
      );
      const allData = querySnapshot.docs.map((doc) => doc.data());

      const questionIds = generateRandomNumbers(606, 1205, 10);
      const incorrectIds = generateRandomNumbers(606, 1205, 30);

      const questionsData = allData.filter((item) => questionIds.includes(item.id));
      const incorrectData = allData.filter((item) => incorrectIds.includes(item.id));

      setData(allData);
      generateQuestions(questionsData, incorrectData);
    } catch (error) {
      console.error('Error fetching data from Firestore:', error);
    }
  }, [generateQuestions]);

  const nextQuestion = () => {
    setSelectedOption(null);
    setCorrectOption(null);
    setCircleColor('');
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const skipQuestion = () => {
    const skippedQuestion = questions[currentQuestionIndex];
    setSkippedQuestions([...skippedQuestions, skippedQuestion]);
    nextQuestion();
  };

  const saveResultsToFirestore = async () => {
    try {
      await addDoc(collection(db, 'QuizResults'), {
        score,
        correctWords,
        incorrectWords,
        skippedQuestions,
        timestamp: new Date(),
      });
      console.log('Quiz results saved successfully.');
    } catch (error) {
      console.error('Error saving quiz results to Firestore:', error);
    }
  };

  const checkAnswer = async (selected, correct, question) => {
    if (selected === correct) {
        setScore(score + 1);
        setCorrectWords([...correctWords, question]);
        setSelectedOption(selected);
        setCircleColor('green');
        setCorrectOption(correct);
    } else {
        setIncorrectWords([...incorrectWords, question]);
        await updateMistake(question.id); // Await now works because checkAnswer is async
        // 間違えた単語をFirestoreに記録

        setSelectedOption(selected);
        setCorrectOption(correct);
        setCircleColor('red');
    }
    setTimeout(() => nextQuestion(), 1000);
};

  const fetchUserId = useCallback(async (email) => {
    // ユーザーのIDを取得する関数
    const q = query(collection(db, 'users'), where('email', '==', email));
    // メールアドレスでクエリを作成
    const querySnapshot = await getDocs(q);
    // クエリ結果を取得
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      // 最初のドキュメントを取得
      setUserId(userDoc.id);
      // ステートを更新
    }
  }, []);

  useEffect(() => {
    // useEffect: Reactのフックで、副作用を処理するために使用。
    // この関数はコンポーネントのマウント時（初回レンダリング時）に実行される。
    
    const auth = getAuth();
    // Firebaseの認証サービスを取得。ユーザーの認証状態を管理するために使用。

    onAuthStateChanged(auth, (user) => {
        // Firebaseの`onAuthStateChanged`メソッドを使用して、
        // 現在の認証状態（ログイン状態）を監視。

        if (user) {
            // ユーザーがログインしている場合の処理
            fetchUserId(user.email);
            // `user.email`を引数にして、ユーザーIDを取得する関数を呼び出す。
        } else {
            // ユーザーがログインしていない場合の処理
            console.log('User is not logged in');
            // コンソールにログイン状態が未確認であることを表示。
        }
    });

    fetchData();
    // 必要なデータを取得するための関数を呼び出す。

}, [fetchData, fetchUserId]);
// 第二引数の依存配列: `fetchData`と`fetchUserId`が変更された場合、useEffectを再実行する。
// 空の配列ではないため、これらの関数が外部で更新されると、この副作用も再実行される。

  const updateMistake = async (wordId) => {
    // ユーザーが間違えた単語をFirestoreに記録または更新する関数
    if (!userId) return;
    // ユーザーIDがない場合は処理を終了

    const docRef = doc(db, 'NOM-MCQ', `${userId}_${wordId}`);
    // FirestoreのNOM-MCQコレクションにおけるユーザーごとの単語ドキュメント参照を作成
    const docSnap = await getDoc(docRef);
    // ドキュメントのデータを取得

    if (docSnap.exists()) {
      // ドキュメントが存在する場合
      await updateDoc(docRef, {
        state: docSnap.data().state + 1
        // stateフィールド（間違えた回数）をインクリメント
      });
    } else {
      // ドキュメントが存在しない場合
      await setDoc(docRef, {
        id: wordId,
        state: 1,
        userid: userId
        // 新しいドキュメントを作成して初期値を設定
      });
    }
  };

  if (data.length === 0 || questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= totalQuestions) {
    saveResultsToFirestore();

    const correctPercentage = (score / totalQuestions) * 100;

    return (
      <div className="quiz-container">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={100}
              style={{ color: '#d3d3d3' }}
              size={150}
            />
            <CircularProgress
              variant="determinate"
              value={correctPercentage}
              style={{ color: 'green', position: 'absolute', top: 0, left: 0 }}
              size={150}
            />
            <Box
              top={0}
              left={0}
              bottom={0}
              right={0}
              position="absolute"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4">{`${score}/${totalQuestions}`}</Typography>
            </Box>
          </Box>
          <Typography variant="h6" style={{ marginTop: '20px' }}>
            正答率: {correctPercentage.toFixed(2)}%
          </Typography>

          <h4>正解した単語</h4>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>中国語</TableCell>
                  <TableCell>日本語</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {correctWords.map((word, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <span style={{ fontSize: 'small' }}>{word.pinyin}</span><br />
                    {word.chinese}
                    </TableCell>
                    <TableCell>{word.japanese}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <h4>間違った単語</h4>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>中国語</TableCell>
                  <TableCell>日本語</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {incorrectWords.map((word, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <span style={{ fontSize: 'small' }}>{word.pinyin}</span><br />
                      {word.chinese}
                      </TableCell>
                    <TableCell>{word.japanese}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          <h4>スキップした問題</h4>
          <TableContainer component={Paper}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>中国語</TableCell>
                  <TableCell>日本語</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {skippedQuestions.map((word, index) => (
                  <TableRow key={index}>
                    <TableCell>
                    <span style={{ fontSize: 'small' }}>{word.pinyin}</span><br />
                      {word.chinese}
                      </TableCell>
                    <TableCell>{word.japanese}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button variant="contained" color="primary" onClick={() => window.location.reload()} style={{ marginTop: '20px' }}>
            クイズを再開
          </Button>
        </Box>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];
  const { chinese, japanese, options, pinyin } = question;

  return (
    <div className="quiz-container">
      <div className="progress">問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      <div className="question">
        <Typography variant="subtitle1" style={{ fontSize: '14px', color: 'gray' }}>
          {pinyin}
        </Typography>
        <Typography variant="h6">{chinese}</Typography>
      </div>
      <div className="choices">
        {options.map((option, index) => (
          <button
            key={index}
            onClick={() => checkAnswer(option, japanese, question)}
            style={{
              backgroundColor:
                selectedOption === option
                  ? circleColor
                  : correctOption === option
                  ? 'green'
                  : '',
              color: selectedOption === option ? 'white' : '',
              border: selectedOption === option ? '1px solid black' : '1px solid gray',
              padding: '10px',
              margin: '5px',
              borderRadius: '5px',
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <Button variant="outlined" onClick={skipQuestion} style={{ marginTop: '20px' }}>
        スキップ
      </Button>
    </div>
  );
};

export default Hsk4MCQ;
