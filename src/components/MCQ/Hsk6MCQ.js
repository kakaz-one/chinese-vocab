import React, { useState, useEffect, useCallback } from 'react';
// Reactライブラリをインポートし、useState, useEffect, useCallbackのフックを使用可能にする
import { collection, getDocs, query, where, setDoc, doc, getDoc, updateDoc,} from 'firebase/firestore';
// Firestore（Firebaseのデータベース）の操作に必要な関数をインポート
import { getAuth, onAuthStateChanged } from 'firebase/auth';
// Firebase Authenticationの機能をインポート
import { db } from '../../FirebaseConfig'; 
// Firebase設定ファイルをインポートし、データベースインスタンス(db)を使用
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button, CircularProgress, Box, Typography } from '@mui/material';
// Material-UIのコンポーネントをインポートしてUIを構築
import './HskMCQ.css';
// スタイルを定義したCSSファイルをインポート


const Hsk6MCQ = () => {
  // HSK 6級の選択問題アプリケーションを定義する関数コンポーネント
  const [data, setData] = useState([]);
   // Firestoreから取得したデータを保存するステート
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  // 現在表示中の質問番号を管理するステート
  const [score, setScore] = useState(0);
  // 正解数をカウントするステート
  const [questions, setQuestions] = useState([]);
  // 出題する質問データを保存するステート
  const [incorrectWords, setIncorrectWords] = useState([]);
  // 間違えた単語を記録するステート
  const [correctWords, setCorrectWords] = useState([]);
  // 正解した単語を記録するステート
  const [userId, setUserId] = useState('');
  // ログインユーザーのIDを保存するステート
  const [showCircle, setShowCircle] = useState(false);
  // 正誤判定のアニメーション表示を制御するステート
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctOption, setCorrectOption] = useState(null);
  const [circleColor, setCircleColor] = useState('');
  const totalQuestions = 10;
  // 全体の問題数を設定

  const shuffleOptions = useCallback((correctOption, data) => {
    // 正解選択肢を含む4つの選択肢をシャッフルして生成する関数
    if (!data || data.length === 0) {
      return [];
    }

    let options = [correctOption];
    // 正解選択肢を配列に追加
    while (options.length < 4) {
      // 4つの選択肢を作る
      let option = data[Math.floor(Math.random() * data.length)].japanese;
      // ランダムな選択肢を取得
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    return options.sort(() => 0.5 - Math.random());
    // 配列をランダムに並べ替え
  }, []);

  const generateQuestions = useCallback((data) => {
    // 問題をランダムに生成する関数
    if (!data || data.length === 0) {
      return;
    }

    const usedIndices = new Set();
    // 重複を防ぐために使用したインデックスを記録
    const newQuestions = [];
    while (newQuestions.length < totalQuestions) {
      const randomIndex = Math.floor(Math.random() * data.length);
      // ランダムにインデックスを取得
      if (!usedIndices.has(randomIndex)) {
        const randomQuestion = data[randomIndex];
        // ランダムに選ばれた問題を取得
        newQuestions.push({
          ...randomQuestion,
          options: shuffleOptions(randomQuestion.japanese, data),
          // 選択肢を生成
        });
        usedIndices.add(randomIndex);
      }
    }
    setQuestions(newQuestions);
  }, [shuffleOptions]);

  const fetchData = useCallback(async () => {
    // FirestoreからHSKデータを取得する関数
    let t = performance.now();
     // 処理時間の測定を開始
    const q = query(collection(db, 'HSK'), where('hskclass', '==', 6));
    // HSK 6級のデータをクエリで取得
    const querySnapshot = await getDocs(q);
    // クエリ結果を取得
    const fetchedData = querySnapshot.docs.map(doc => doc.data());
    // データを整形して配列に変換
    setData(fetchedData);
    // ステートを更新
    console.log('fetchData', performance.now() - t);
    // 処理時間を出力
    if (fetchedData.length > 0) {
      generateQuestions(fetchedData);
      // 問題を生成
    }
  }, [generateQuestions]);

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
    // コンポーネントのマウント時にデータを取得するためのフック
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      // ログイン状態を監視
      if (user) {
        fetchUserId(user.email);
        // ユーザーIDを取得
      } else {
        // ユーザーがログインしていない場合の処理
        console.log('User is not logged in');
        // ユーザーが未ログインの場合の処理
      }
    });

    fetchData();
    // データを取得
  }, [fetchData, fetchUserId]);

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

  const nextQuestion = () => {
    // 次の問題に進むための関数
    setShowCircle(false);
     // 正誤判定アニメーションを非表示
    setSelectedOption(null);
    // 選択肢をリセット
    setCorrectOption(null);
    // 正解の選択肢をリセット
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    // 現在の問題番号を次に進める
  };

  const checkAnswer = async (selected, correct, question) => {
    // ユーザーの回答をチェックし、正誤判定を行う関数
    if (selected === correct) {
      // 回答が正解の場合
      setScore(score + 1);
      // スコアを1増やす
      setCorrectWords([...correctWords, question]);
      // 正解した単語リストに追加
      setSelectedOption(selected);
      // 選択したオプションを設定
      setCircleColor('yellowgreen');
      // アニメーションの色を緑に設定
      setShowCircle(true);
      // アニメーションを表示
      setTimeout(() => nextQuestion(), 500);
      // 0.5秒後に次の問題に進む
    } else {
      // 回答が不正解の場合
      setIncorrectWords([...incorrectWords, question]);
      // 間違えた単語リストに追加
      await updateMistake(question.id);
      // 間違えた単語をFirestoreに記録
      setSelectedOption(selected);
      // 選択したオプションを設定
      setCorrectOption(correct);
      // 正解の選択肢を設定
      setCircleColor('red');
      // アニメーションの色を赤に設定
      setShowCircle(true);
      // アニメーションを表示
      setTimeout(() => nextQuestion(), 500);
      // 0.5秒後に次の問題に進む
    }
  };

  const nextQuiz = () => {
    // クイズを再開するための関数
    setCurrentQuestionIndex(0);
    // 現在の問題番号をリセット
    setScore(0);
    // スコアをリセット
    setIncorrectWords([]);
    // 間違えた単語リストをリセット
    setCorrectWords([]);
    // 正解した単語リストをリセット
    generateQuestions(data);
    // 新しい問題セットを生成
  };

  if (data.length === 0 || questions.length === 0) {
    // データまたは問題が読み込まれていない場合
    return <div>Loading...</div>;
    // ローディングメッセージを表示
  }

  if (currentQuestionIndex >= totalQuestions) {
    // 全ての問題が終了した場合
    const correctPercentage = (score / totalQuestions) * 100;
    // 正解率を計算

    return (
      // クイズ結果を表示
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
                // 正解数を表示
              </Typography>
            </Box>
          </Box>
        </Box>
        <Button variant="contained" color="primary" onClick={nextQuiz}>次へ</Button>
        // 次のクイズを開始するボタン

        <h4 style={{ color: 'red' }}>覚えていない単語</h4>
        // ユーザーが間違えた単語リストのセクションタイトルを赤色で表示
        <TableContainer component={Paper}>
        // Material-UIのPaperで囲まれたTableコンポーネントのコンテナを定義
          <Table>
          // 単語リストを表示するテーブル
            <TableHead>
            // テーブルのヘッダー部分
              <TableRow>
              // ヘッダーの行
                <TableCell>中国語</TableCell>
                // 中国語の単語列のタイトル
                <TableCell>日本語</TableCell>
                // 日本語訳の列のタイトル
              </TableRow>
            </TableHead>
            <TableBody>
            // テーブルのデータ部分
              {incorrectWords.map((word, index) => (
                // 間違えた単語リストをループして行を生成
                <TableRow key={index}>
                  // 各単語の行を一意なキー付きで作成
                  <TableCell>
                  // 中国語列
                    <span style={{ fontSize: 'small' }}>{word.pinyin}</span><br />
                    // ピンインを小さなフォントサイズで表示
                    {word.chinese}
                    // 中国語の単語を表示
                  </TableCell>
                  <TableCell>{word.japanese}</TableCell>
                  // 日本語訳を表示
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <h4 style={{ color: 'yellowgreen' }}>覚えている単語</h4>
        // ユーザーが正解した単語リストのセクションタイトルを緑色で表示
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
  // 現在の質問を取得

  const { japanese, chinese, pinyin, options } = question;
  // 質問オブジェクトから日本語、中国語、ピンイン、選択肢を抽出

  return (
    <div className="quiz-container">
      // クイズ全体を囲むコンテナ
      <div className="progress" style={{ fontFamily: 'Hanatochouchou' }}>問題 {currentQuestionIndex + 1}/{totalQuestions}</div>
      // 現在の問題番号と総問題数を表示
      <div className="question" style={{ position: 'relative' }}>
        {showCircle && circleColor === 'yellowgreen' && (
          // 正解時のアニメーションを表示
          <div style={{
            width: '90px',
            height: '90px',
            border: `20px solid ${circleColor}`,
            borderRadius: '50%',
            position: 'absolute',
            top: '50px',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}></div>
        )}
        {showCircle && circleColor === 'red' && (
          // 不正解時のアニメーションを表示
          <div style={{
            width: '150px',
            height: '150px',
            color: 'red',
            fontSize: '150px',
            position: 'absolute',
            top: '20px',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }}>×</div>
        )}
        <p className='cwTeXKai' style={{fontSize:"24px"}}>{pinyin}</p>
        // ピンインを表示
        <p className='Noto Serif SC'>{chinese}</p>
        // 中国語の単語を表示
      </div>
      <div className="choices">
      // 選択肢を表示するセクション
        {options.map((option, index) => (
           // 各選択肢ボタンを生成
          <button key={index} className="choice" style={{
            fontFamily: 'Hanatochouchou',
            backgroundColor: selectedOption === option ? (circleColor === 'red' ? 'darkgray' : 'yellowgreen') : (correctOption === option ? 'yellowgreen' : '')
          }} onClick={() => checkAnswer(option, japanese, question)}>
            {option}
            // ボタンラベルとして選択肢を表示
          </button>
        ))}
      </div>
      <Button 
      variant="contained" 
      onClick={() => checkAnswer(null, question.japanese, question)}  
      style={{ fontFamily: 'Hanatochouchou' }}>
        分からない
        // 「分からない」ボタンを表示。正解が分からない場合に選択可能
      </Button>
    </div>
  );
};

export default Hsk6MCQ;
