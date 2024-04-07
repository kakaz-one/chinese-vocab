import React, { Component } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import "./hsk1test.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

// Firestoreの初期化
const db = getFirestore();

class Hsk1Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [], // カードのデータ
      currentCardIndex: 0, // 現在表示しているカードのインデックス
    };
  }

  async componentDidMount() {
    const q = query(collection(db, "HSK1"), where("id", ">=", 1), where("id", "<=", 10));
    const querySnapshot = await getDocs(q);
    const cards = querySnapshot.docs.map(doc => ({...doc.data(), showFront: true}));
    this.setState({ cards });
  }

  toggleCard = () => {
    this.setState(prevState => ({
      cards: prevState.cards.map((card, i) => 
        i === prevState.currentCardIndex ? {...card, showFront: !card.showFront} : card
      )
    }));
  }

  // 現在のカードのインデックスをインクリメント
  nextCard = () => {
    this.setState(prevState => ({
      currentCardIndex: prevState.currentCardIndex + 1,
    }));
  }

  // 現在のカードのインデックスをデクリメント
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
        <Button variant="outlined" color="error">覚えていない</Button>
        {currentCardIndex > 0 && <ArrowCircleLeftIcon fontSize="large" onClick={this.prevCard} />}
        {currentCardIndex < cards.length - 1 && <ArrowCircleRightIcon fontSize="large" onClick={this.nextCard} />}
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
