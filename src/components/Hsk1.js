import React, { useState, useEffect, useCallback } from 'react';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../FirebaseConfig'; // Firebase設定ファイルをインポート
import "./Hsk.css";

const Hsk1MCQ = () => {
  const [data, setData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [questions, setQuestions] = useState([]);
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

    const newQuestions = [];
    for (let i = 0; i < totalQuestions; i++) {
      const randomQuestion = data[Math.floor(Math.random() * data.length)];
      newQuestions.push({
        ...randomQuestion,
        options: shuffleOptions(randomQuestion.japanese, data),
      });
    }
    setQuestions(newQuestions);
  }, [shuffleOptions]);

  const fetchData = useCallback(async () => {
    const q = query(collection(db, 'HSK'), where('hskclass', '==', 1));
    const querySnapshot = await getDocs(q);
    const fetchedData = querySnapshot.docs.map(doc => doc.data());
    setData(fetchedData);
    if (fetchedData.length > 0) {
      generateQuestions(fetchedData);
    }
  }, [generateQuestions]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const nextQuestion = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const checkAnswer = (selected, correct) => {
    if (selected === correct) {
      setScore(score + 1);
      alert('正解です！');
    } else {
      alert(`不正解です。正解は ${correct} です。`);
    }
    nextQuestion();
  };

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
  };

  const nextQuiz = () => {
    setCurrentQuestionIndex(0);
    setScore(0);
    generateQuestions(data);
  };

  if (data.length === 0 || questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (currentQuestionIndex >= totalQuestions) {
    return (
      <div className="quiz-container">
        <div className="score">スコア: {score}/{totalQuestions}</div>
        <button className="restart" onClick={restartQuiz}>テストをやり直す</button>
        <button className="next" onClick={nextQuiz}>次へ</button>
        <a className="gohome" href="/mypagehome">ホームに戻る</a>
      </div>
    );
  }

  const question = questions[currentQuestionIndex];
  const { japanese, chinese, pinyin, options } = question;

  return (
    <div className="quiz-container">
      <div className="progress">問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      <div className="question">
        <p>{pinyin}</p>
        <p>{chinese}</p>
      </div>
      <div className="choices">
        {options.map((option, index) => (
          <button key={index} className="choice" onClick={() => checkAnswer(option, japanese)}>
            {option}
          </button>
        ))}
      </div>
      <button className="skip" onClick={nextQuestion}>分からない</button>
      <a className="gohome" href="/mypagehome">ホームに戻る</a>
    </div>
  );
};

export default Hsk1MCQ;
