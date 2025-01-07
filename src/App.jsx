import './App.css'
import Scoreboard from './Scoreboard.jsx'
import Card from './Card.jsx'

function App() {

  return (
    <>
      <p>
      This is a memory game! Try to continue clicking on cards that you haven&apos;t before (each time you click on a card, the cards will shuffle). The score will continue to tally up until you&apos;re at the highest score!
      </p>
      <Scoreboard />
      <Card />
    </>
  )
}

export default App
