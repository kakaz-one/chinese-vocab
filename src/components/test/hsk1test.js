import React, { Component } from 'react';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { updateDoc, increment } from 'firebase/firestore';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import "./hsk1test.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// FirestoreとAuthenticationの初期化
const db = getFirestore();
const auth = getAuth();

class Hsk1Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [], // カードのデータ
      currentCardIndex: 0, // 現在表示しているカードのインデックス
      userId: null, // ユーザーID
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
    const q = query(collection(db, "HSK1"), where("id", ">=", 1), where("id", "<=", 10));
    const querySnapshot = await getDocs(q);
    const cards = querySnapshot.docs.map(doc => ({...doc.data(), showFront: true}));
    this.setState({ cards });
  }

  // FirestoreのNOMコレクションにデータを追加
  addToNOMCollection = async () => {
    if (this.state.userId && this.state.cards.length > 0) {
      const currentCard = this.state.cards[this.state.currentCardIndex];
      const nomCollection = collection(db, "NOM");
      const q = query(nomCollection, where("userid", "==", this.state.userId), where("id", "==", currentCard.id));
      const querySnapshot = await getDocs(q);
  
      if (querySnapshot.empty) {
        // ドキュメントが存在しない場合、新しいドキュメントを作成
        await addDoc(nomCollection, {
          userid: this.state.userId,
          id: currentCard.id,
          state: 1
        });
        console.log('Added to NOM collection with state 1');
      } else {
        // ドキュメントが存在する場合、state フィールドの値を1増やす
        const docRef = querySnapshot.docs[0].ref;
        await updateDoc(docRef, {
          state: increment(1)
        });
        console.log('Incremented state by 1 in existing NOM document');
      }
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
    this.setState(prevState => ({
      currentCardIndex: prevState.currentCardIndex + 1,
    }));
  }
  
  prevCard = () => {
    this.setState(prevState => ({
      currentCardIndex: prevState.currentCardIndex - 1,
    }));
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
      <Stack direction="row" spacing={2}>
        <Button variant="outlined" color="error" onClick={this.addToNOMCollection}>覚えていない</Button>
        {currentCardIndex > 0 && (
          <ArrowCircleLeftIcon fontSize="large" onClick={() => this.prevCard()} />
        )}
        {currentCardIndex < cards.length - 1 && (
          <ArrowCircleRightIcon fontSize="large" onClick={() => this.nextCard()} />
        )}        
        <Button variant="contained" color="success">覚えてる</Button>   
      </Stack>
    </>    );
  }

  render() {
    return (
      <div>
        <h1>HSK1 Flashcard</h1>
        {this.renderCards()}
      </div>
    );
  }
}

export default Hsk1Flashcard;
