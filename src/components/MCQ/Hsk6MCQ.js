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
  //  `selectedOption`: 現在選択されているオプションを管理する状態変数。初期値は`null`。
  //  `setSelectedOption`: `selectedOption`の値を更新するための関数。
  const [correctOption, setCorrectOption] = useState(null);
  // `correctOption`: 正解のオプションを管理する状態変数。初期値は`null`
  // `setCorrectOption`: `correctOption`の値を更新するための関数
  const [circleColor, setCircleColor] = useState('');
  const totalQuestions = 10;
  // 全体の問題数を設定

  const shuffleOptions = useCallback((correctOption, data) => {
    // 正解選択肢を含む4つの選択肢をランダムにシャッフルして生成する関数

    if (!data || data.length === 0) {
      // データが空または無効な場合、空の配列を返して処理を終了
      return [];
    }

    let options = [correctOption];
    // 正解選択肢をまず配列に追加

    while (options.length < 4) {
      // 必要な選択肢が4つに達するまで繰り返し処理を実行
      let option = data[Math.floor(Math.random() * data.length)].japanese;
      // データからランダムに1つの日本語（選択肢）を取得
      if (!options.includes(option)) {
        // 選択肢がすでに配列内に存在していない場合のみ追加
        options.push(option);
      }
    }

    return options.sort(() => 0.5 - Math.random());
    // 配列内の選択肢をランダムに並び替えて返す
  }, []);
  // useCallbackを使用して、依存関係が変わらない限り、この関数は再生成されない

  const generateQuestions = useCallback((data) => {
    // 問題をランダムに生成する関数
    if (!data || data.length === 0) {
      return;
      // データが空または無効な場合、処理を中断
    }

    const usedIndices = new Set();
    // 使用済みインデックスを記録するSetオブジェクトを作成（重複を防ぐため）
    const newQuestions = [];
    // 新しく生成される質問を格納する配列を初期化
    while (newQuestions.length < totalQuestions) {
      // 必要な数の質問が生成されるまで繰り返し処理を実行
      const randomIndex = Math.floor(Math.random() * data.length);
      // データ配列の長さに基づいてランダムなインデックスを生成
      if (!usedIndices.has(randomIndex)) {
        // 生成されたインデックスが使用済みでない場合
        const randomQuestion = data[randomIndex];
        // ランダムなインデックスに対応する問題データを取得
        newQuestions.push({
          ...randomQuestion,
          // 問題データをコピーして新しいオブジェクトを作成
          options: shuffleOptions(randomQuestion.japanese, data),
          // 問題の日本語部分とデータを使って選択肢を生成（`shuffleOptions`関数を使用）
        });
        usedIndices.add(randomIndex);
        // 使用済みインデックスに追加
      }
    }
    setQuestions(newQuestions);
    // 生成された質問リストをReactの状態管理用変数（ステート）に保存
  }, [shuffleOptions]);
  // `useCallback`により、`shuffleOptions`が変化しない限り、この関数は再生成されない

  const fetchData = useCallback(async () => {
    // FirestoreからHSKデータを取得する関数
    let t = performance.now();
    // 現在の処理開始時間を取得し、パフォーマンス測定のために記録する
    const q = query(collection(db, 'HSK'), where('hskclass', '==', 6));
    // Firestoreの`HSK`コレクションから、`hskclass`フィールドが6に等しいドキュメントを検索するクエリを作成
    const querySnapshot = await getDocs(q);
    // 上記のクエリをFirestoreに送信し、対応するドキュメントを取得（非同期処理）
    const fetchedData = querySnapshot.docs.map(doc => doc.data());
    // クエリで取得したドキュメントを配列形式に整形
    setData(fetchedData);
    // 取得したデータをReactの状態管理用変数（ステート）に保存
    console.log('fetchData', performance.now() - t);
    // 現在の時間と記録していた開始時間の差分を計算し、処理にかかった時間をコンソールに出力
    if (fetchedData.length > 0) {
      generateQuestions(fetchedData);
      // データが1件以上取得できた場合、`generateQuestions`関数を呼び出し、問題を生成
    }const fetchData = useCallback(async () => {
      // useCallback: 関数の再生成を防ぐフック。
      // `fetchData`は`generateQuestions`が変更されない限り同じインスタンスを再利用する。
  
      let t = performance.now();
      // 現在の処理開始時間を記録。
      // `performance.now()`はミリ秒単位で高精度な時間を返すため、処理時間の測定に適している。
  
      const q = query(collection(db, 'HSK'), where('hskclass', '==', 6));
      // Firestoreのデータベースから特定の条件に一致するデータを取得するクエリを構築。
      // - `collection(db, 'HSK')`: 'HSK'コレクションを指定。
      // - `where('hskclass', '==', 6)`: 'hskclass'フィールドが6に等しいデータを検索する条件。
  
      const querySnapshot = await getDocs(q);
      // Firestoreにクエリを実行して結果を取得（非同期処理）。
      // - `querySnapshot`: 条件に一致したドキュメントの集合。
  
      const fetchedData = querySnapshot.docs.map(doc => doc.data());
      // 取得したドキュメントを`map`で処理し、各ドキュメントのデータ部分を取り出して配列に変換。
  
      setData(fetchedData);
      // Reactの状態管理関数`setData`を呼び出して、取得したデータを状態として保存。
  
      console.log('fetchData', performance.now() - t);
      // 現在の時間から開始時間を引き算して、データ取得にかかった時間をコンソールに出力。
  
      if (fetchedData.length > 0) {
          // データが1件以上取得された場合の処理。
          generateQuestions(fetchedData);
          // 問題を生成する関数`generateQuestions`を呼び出し、取得したデータを渡す。
      }
  }, [generateQuestions]);
  // useCallbackの依存配列として`generateQuestions`を指定。
  // `generateQuestions`が変更された場合のみ、この関数が再生成される。
  
  }, [generateQuestions]);
  // `useCallback`により、この関数は`generateQuestions`が変化しない限り再生成されない

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
