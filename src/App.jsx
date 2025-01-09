import './App.css';
import Scoreboard from './Scoreboard.jsx';
import Card from './Card.jsx';
import { useState } from 'react';

function App() {
    const [cardHash, setCardHash] = useState([]);
    const [score, setScore] = useState(0);
    console.log(cardHash, score);

    function handleImgClick(event) {
        const card = event.target.dataset.value
        if (card in cardHash){
           setScore(0)
        } else {
            console.log('cardhashspread',...cardHash);
            setCardHash([...cardHash, card])
            setScore(score + 1)
        }
    }

  return (
    <>
      <p>
      This is a memory game! Try to continue clicking on cards that you haven&apos;t before (each time you click on a card, the cards will shuffle). The score will continue to tally up until you&apos;re at the highest score!
      </p>
      <Scoreboard />
      <div className = "card-container">
          <Card cardNumber = {0} handleClick = {handleImgClick}/>
          <Card cardNumber = {1} handleClick = {handleImgClick}/>
      </div>
    </>
  )
}

export default App
