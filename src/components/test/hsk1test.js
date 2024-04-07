import React, { Component } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import "./hsk1test.css";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';


// Firestoreの初期化
const db = getFirestore();

class Hsk1Flashcard extends Component {
  constructor() {
    super();
    this.state = {
      cards: [], // カードのデータと各カードの表示状態を含む
    };
  }

  async componentDidMount() {
    // Firestoreからidフィールドが1から10の範囲にあるドキュメントを全て取得
    const q = query(collection(db, "HSK1"), where("id", ">=", 1), where("id", "<=", 10));
    const querySnapshot = await getDocs(q);

    // カードのデータに表示状態(showFront: true)を追加
    const cards = querySnapshot.docs.map(doc => ({...doc.data(), showFront: true}));
    this.setState({ cards });
  }

  toggleCard = (index) => {
    this.setState(prevState => ({
      cards: prevState.cards.map((card, i) => 
        i === index ? {...card, showFront: !card.showFront} : card
      )
    }));
  }

  renderCards() {
    const { cards } = this.state;

    if (cards.length === 0) return <p>Loading...</p>;

    return cards.map((card, index) => (
      <>
      <div key={index} onClick={() => this.toggleCard(index)}  className="flashcard" >
        {card.showFront ? (
            <div className="flashcard-front">

             <p className='japanese'>{card.japanese}</p>
             
            </div>
        ) : (
          <>
            <div className="flashcard-back">

             <p className='chinese'>{card.chinese}</p>
             <p>{card.pinyin}</p>

            </div>
          </>
        )}
      </div>  
      <ArrowCircleLeftIcon  fontSize="large"/>
      <ArrowCircleRightIcon fontSize="large"/>
      </>
    ));
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
