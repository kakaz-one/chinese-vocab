import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, where, setDoc, doc, getDoc, updateDoc,} from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { db } from '../../FirebaseConfig'; // Firebase設定ファイルをインポート
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress, Box, Typography } from '@mui/material';
import './HskMCQ.css';


const Hsk4MCQ = () => {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [incorrectWords, setIncorrectWords] = useState([]);
  const [correctWords, setCorrectWords] = useState([]);
  const [userId, setUserId] = useState('');
  const [showCircle, setShowCircle] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [circleColor, setCircleColor] = useState('');
  const totalQuestions = 10;

  const shuffleOptions = useCallback((correctOption, data) => {
    if (!data || data.length === 0) {
      return [];
    }

    let options = [correctOption];
    while (options.length < 4) {
      let option = data[Math.floor(Math.random() * data.length)].japanese;
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    return options.sort(() => 0.5 - Math.random());
  }, []);

  const generateQuestions = useCallback((data) => {
    if (!data || data.length === 0) {
      return;
    }

    const usedIndices = new Set();
    const newQuestions = [];
    while (newQuestions.length < totalQuestions) {
      const randomIndex = Math.floor(Math.random() * data.length);
      if (!usedIndices.has(randomIndex)) {
        const randomQuestion = data[randomIndex];
        newQuestions.push({
          ...randomQuestion,
          options: shuffleOptions(randomQuestion.japanese, data),
        });
        usedIndices.add(randomIndex);
      }
    }
    setQuestions(newQuestions);
  }, [shuffleOptions]);

  const fetchData = useCallback(async () => {
    const q = query(collection(db, 'HSK'), where('hskclass', '==', 4));
    const querySnapshot = await getDocs(q);
    const fetchedData = querySnapshot.docs.map(doc => doc.data());
    setData(fetchedData);
    if (fetchedData.length > 0) {
      generateQuestions(fetchedData);
    }
  }, [generateQuestions]);

  const fetchUserId = useCallback(async (email) => {
    const q = query(collection(db, 'users'), where('email', '==', email));
    const querySnapshot = await getDocs(q);
    if (!querySnapshot.empty) {
      const userDoc = querySnapshot.docs[0];
      setUserId(userDoc.id);
    }
  }, []);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        fetchUserId(user.email);
      } else {
        // ユーザーがログインしていない場合の処理
        console.log('User is not logged in');
      }
    });

    fetchData();
  }, [fetchData, fetchUserId]);

  const updateMistake = async (wordId) => {
    if (!userId) return;

    const docRef = doc(db, 'NOM-MCQ', `${userId}_${wordId}`);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
      await updateDoc(docRef, {
        state: docSnap.data().state + 1
      });
    } else {
      await setDoc(docRef, {
        id: wordId,
        state: 1,
        userid: userId
      });
    }
  };

  const nextQuestion = () => {
    setShowCircle(false);
    setSelectedOption(null);
    setCorrectOption(null);
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = async (selected, correct, question) => {
    if (selected === correct) {
      setScore(score + 1);
      setCorrectWords([...correctWords, question]);
      setSelectedOption(selected);
      setCircleColor('yellowgreen');
      setShowCircle(true);
      setTimeout(() => nextQuestion(), 500);
    } else {
      setIncorrectWords([...incorrectWords, question]);
      await updateMistake(question.id);
      setSelectedOption(selected);
      setCorrectOption(correct);
      setCircleColor('red');
      setShowCircle(true);
      setTimeout(() => nextQuestion(), 500);
    }
  };

  const nextQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    setIncorrectWords([]);
    setCorrectWords([]);
    generateQuestions(data);
  };

  if (data.length === 0 || questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= totalQuestions) {
    const correctPercentage = (score / totalQuestions) * 100;

    return (
      <div className="quiz-container">
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Box position="relative" display="inline-flex">
            <CircularProgress
              variant="determinate"
              value={100}
              style={{ color: 'red' }}
              size={150}
            />
            <CircularProgress
              variant="determinate"
              value={correctPercentage}
              style={{ color: 'yellowgreen', position: 'absolute', top: 0, left: 0 }}
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
              <Typography variant="h5" component="div" color="textSecondary">
                {`${score}/${totalQuestions}`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button variant="contained" color="primary" onClick={nextQuiz}>次へ</Button>

        <h4 style={{ color: 'red' }}>覚えていない単語</h4>
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

        <h4 style={{ color: 'yellowgreen' }}>覚えている単語</h4>
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

      </div>
    );
  }

  const question = questions[currentQuestionIndex];
  const { japanese, chinese, pinyin, options } = question;

  return (
    <div className="quiz-container">
      <div className="progress" style={{ fontFamily: 'Hanatochouchou' }}>問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      <div className="question" style={{ position: 'relative' }}>
        {showCircle && circleColor === 'yellowgreen' && (
          <div style={{
            width: '150px',
            height: '150px',
            border: `20px solid ${circleColor}`,
            borderRadius: '50%',
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
        )}
        {showCircle && circleColor === 'red' && (
          <div style={{
            width: '150px',
            height: '150px',
            color: 'red',
            fontSize: '300px',
            position: 'absolute',
            top: '0px',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>×</div>
        )}
        <p className='cwTeXKai'>{pinyin}</p>
        <p className='cwTeXKai'>{chinese}</p>
      </div>
      <div className="choices">
        {options.map((option, index) => (
          <button key={index} className="choice" style={{
            fontFamily: 'Hanatochouchou',
            backgroundColor: selectedOption === option ? (circleColor === 'red' ? 'darkgray' : 'yellowgreen') : (correctOption === option ? 'yellowgreen' : '')
          }} onClick={() => checkAnswer(option, japanese, question)}>
            {option}
          </button>
        ))}
      </div>
      <Button variant="contained" onClick={nextQuestion} style={{ fontFamily: 'Hanatochouchou' }}>分からない</Button>
    </div>
  );
};

export default Hsk4MCQ;
