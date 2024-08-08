import React, { Component } from 'react';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { updateDoc, increment } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { Table, TableBody, TableCell, Stack, TableHead, TableRow, Button, CircularProgress, Box, Typography } from '@mui/material';

// FirestoreとAuthenticationの初期化
const db = getFirestore();
const auth = getAuth();

class Hsk4Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [], // カードのデータ
      currentCardIndex: 0, // 現在表示しているカードのインデックス
      userId: null, // ユーザーID
      knownWords: [], // 覚えている単語
      unknownWords: [], // 覚えていない単語
      showResults: false, // 結果表示フラグ
      totalQuestions: 10, // 問題数
    };
  }

  componentDidMount() {
    // ユーザー認証状態の監視
    onAuthStateChanged(auth, (user) => {
      if (user) {
        this.setState({ userId: user.uid });
        this.fetchCards();
      } else {
        console.log('User is not signed in');
      }
    });
  }

  async fetchCards() {
    const q = query(collection(db, "HSK"), where("hskclass", "==", 4));
    const querySnapshot = await getDocs(q);
    let cards = querySnapshot.docs.map(doc => ({...doc.data(), showFront: true}));
    
    // シャッフルしてランダムに10問選ぶ
    cards = this.shuffleArray(cards).slice(0, this.state.totalQuestions);
    
    this.setState({ cards, currentCardIndex: 0, knownWords: [], unknownWords: [] });
  }

  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  // FirestoreのNOM-FCコレクションにデータを追加
  addToNOMFCCollection = async () => {
    if (this.state.userId && this.state.cards.length > 0) {
      const currentCard = this.state.cards[this.state.currentCardIndex];
      const nomfcCollection = collection(db, "NOM-FC");
      const q = query(nomfcCollection, where("userid", "==", this.state.userId), where("id", "==", currentCard.id));
      const querySnapshot = await getDocs(q);

      if (querySnapshot.empty) {
        await addDoc(nomfcCollection, {
          userid: this.state.userId,
          id: currentCard.id,
          state: 1
        });
        console.log('Added to NOM-FC collection with state 1');
      } else {
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {
          state: increment(1)
        });
        console.log('Incremented state by 1 in existing NOM-FC document');
      }

      this.setState(prevState => ({
        unknownWords: [...prevState.unknownWords, currentCard]
      }), this.nextCard);
    }
  }

  toggleCard = () => {
    this.setState(prevState => ({
      cards: prevState.cards.map((card, i) => 
        i === prevState.currentCardIndex ? {...card, showFront: !card.showFront} : card
      )
    }));
  }

  nextCard = () => {
    const { currentCardIndex, cards } = this.state;
    if (currentCardIndex < cards.length - 1) {
      this.setState(prevState => ({
        currentCardIndex: prevState.currentCardIndex + 1
      }));
    } else {
      this.showResults();
    }
  }

  markAsKnown = () => {
    const { currentCardIndex, cards } = this.state;
    const currentCard = cards[currentCardIndex];
    this.setState(prevState => ({
      knownWords: [...prevState.knownWords, currentCard]
    }), this.nextCard);
  }

  showResults = () => {
    this.setState({ showResults: true });
  }

  nextBatch = () => {
    this.fetchCards();
    this.setState({ showResults: false });
  }

  renderCards() {
    const { cards, currentCardIndex } = this.state;

    if (cards.length === 0) return <p>Loading...</p>;

    const card = cards[currentCardIndex];

    return (
      <>
      <div className="card-wrapper" onClick={this.toggleCard}>
        <div className="card-body">
          {card.showFront ? (
            <div className="card-front">
              <p className='japanese'>{card.japanese}</p>
            </div>
          ) : (
            <div className="card-back">
              <p className='chinese'>{card.chinese}</p>
              <p>{card.pinyin}</p>
            </div>
          )}
        </div>
      </div>  
      <Stack direction="row" spacing={14}>
        <Button variant="outlined" color="error" onClick={this.addToNOMFCCollection}>覚えていない</Button>
        <Button variant="contained" color="success" onClick={this.markAsKnown}>覚えてる</Button>   
      </Stack>
    </>    );
  }

  renderResults() {
    const { knownWords, unknownWords, totalQuestions } = this.state;
    const totalAnswered = knownWords.length + unknownWords.length;
    const score = knownWords.length;
    const correctPercentage = (score / totalAnswered) * 100;

    return (
      <div>
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
        <Box>
        <Button variant="contained" color="primary" onClick={this.nextBatch}>次へ</Button>
        </Box>
        <h4>覚えていない単語</h4>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>中国語</TableCell>
              <TableCell>日本語</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {unknownWords.map((word, index) => (
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

        <h4>覚えている単語</h4>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>中国語</TableCell>
              <TableCell>日本語</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {knownWords.map((word, index) => (
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

      </div>
    );
  }

  render() {
    const { showResults, totalQuestions, currentCardIndex } = this.state;

    return (
      <div>
        <h1>HSK4 Flashcard</h1>
        <div className="progress" >{currentCardIndex + 1}/{totalQuestions}</div>
        {showResults ? this.renderResults() : this.renderCards()}
      </div>
    );
  }
}

export default Hsk4Flashcard;
