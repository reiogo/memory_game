import './App.css';
import Card from './Card.jsx';
import Scoreboard from './Scoreboard.jsx';
import { useState } from 'react';

function App() {
    const [cardSet, setCardSet] = useState(new Set());
    const [score, setScore] = useState(0);
    const [shuffle, setShuffle] = useState(true);

    function handleImgClick(event) {
        const card = event.target.dataset.value
        if (cardSet.has(card)){
            setScore(0)
            alert("You made a mistake!");
            setCardSet(new Set())
        } else {
            if ((score + 1) == numberOfCards){
               alert("You made it to the end! Congrats!");
            setCardSet(new Set())
            }
            setCardSet(cardSet.add(card))
            setScore(score + 1)
        }
        setShuffle(!shuffle)
    }


    function cardManager(numCards){
        // Make an array that contains the Cards
        let cardsArray = []
        for (let i = 0; i < numCards; i++) {
            cardsArray.push(
                <Card key={i} cardNumber={i} handleClick = {handleImgClick} />
            )
        }
            for(let i = (cardsArray.length - 1); i>= 0; i--){
                const j = Math.floor(Math.random()*(i+1));
                [cardsArray[i], cardsArray[j]] = [cardsArray[j], cardsArray[i]]
            }
        return cardsArray
    }

    // This decides how many cards there are.
    const numberOfCards =  7
    const cards = cardManager(numberOfCards);



  return (
    <>
      <div className="header">
          <div>
              <h1>
                  Memory Game
              </h1>
              <p className ="description">
      This game will test your memory! I will keep track of which cards you have already clicked, if you click on the same card twice then it&apos;s back to zero!
              </p>
          </div>
          <Scoreboard highscore={numberOfCards} score={score} />
      </div>
      <div className = "card-container">
        {cards}
      </div>
      <footer className="footer">
        <span className="excuses">If there are no images and only numbers, then probably the Giphy API has reached its limit.</span>
      </footer>
    </>
  )
}

export default App
