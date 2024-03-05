import React, { useState } from 'react';
import "./Hsk.css";


const Hsk2 = () => {
  const data = [
    ["1", "1", "愛する", "爱", "ài"],
    ["2", "1", "八", "八", "bā"],
    ["3", "1", "お父さん", "爸爸", "bàba"],
    ["4", "1", "コップ", "杯子", "bēizi"],
    ["5", "1", "北京", "北京", "běijīng"],
    ["6", "1", "ノート", "本", "běn"],
    ["7", "1", "ではありません（否定）", "不", "bù"],
    ["8", "1", "どういたしまして", "不客气", "bù kèqì"],
    ["9", "1", "料理", "菜", "cài"],
    ["10", "1", "お茶", "茶", "chá"],
    ["11", "1", "食べる", "吃", "chī"],
    ["12", "1", "タクシー", "出租车", "chūzū chē"],
    ["13", "1", "電話をする", "打电话", "dǎ diànhuà"],
    ["14", "1", "大きい", "大", "dà"],
    ["15", "1", "の", "的", "de"],
  ];
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const totalQuestions = 10;

  const shuffleOptions = (correctOption) => {
    let options = [correctOption];
    while (options.length < 4) {
      let option = data[Math.floor(Math.random() * data.length)][2];
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    return options.sort(() => 0.5 - Math.random());
  };

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

  if (currentQuestionIndex >= totalQuestions) {
    return (
      <div className="quiz-container">
        <div className="score">スコア: {score}/{totalQuestions}</div>
        <button className="restart" onClick={restartQuiz}>テストをやり直す</button>
        <a className="gohome" href="/mypagehome">ホームに戻る</a>
      </div>
    );
  }

  const question = data[currentQuestionIndex];
  const [id, hskClass, japanese, chinese, pinyin] = question;
  const options = shuffleOptions(japanese);

  return (
    <div className="quiz-container">
      <div className="progress">問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      <div className="question" >
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
      <button className="restart" onClick={restartQuiz} style={{ display: 'none' }}>テストをやり直す</button>
      <a className="gohome" href="/mypagehome" >ホームに戻る</a>
    </div>
  );
};

export default Hsk2;
