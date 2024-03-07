import { useState, useEffect } from 'react'
import React from 'react'
import './App.css'

// SWITCH TO 2D ARRAY

function App() {
  const [cards, setCards] = useState([])
  const [marked, setMarked] = useState([])
  const [challenges, setChallenges] = useState([])

  function getChallenges() {
    console.log("readChallenges start")
    
    fetch("chal.txt")
      .then((res) => res.text())
      .then((text) => {
        console.log(text)
        console.log("chal.txt contents:")
        setCards(text.split('\n'))
        setChallenges(text.split('\n'))
   })
  .catch((e) => console.error(e));

    console.log("readChallenges end")
  }

  function reset() {

      
    setMarked([])
    const newChallenges = getChallenges()
    console.log(newChallenges)
    // Set the challenges state
    //setChallenges(getChallenges());
    //setCards(newChallenges);
  }

  useEffect(() => {
    reset()
   }, []);
  
  const handleCardClick = index => {
    
    
    if(marked.includes(index)) {
      setMarked(marked.filter(e => e !== index))
    }
    else {
    setMarked([...marked, index])
    }


    console.log("marked", marked)
    console.log("index", index)
    console.log("card", cards[index])
  }

// check if five in a row occured
function checkWin() {

}


  return (
    <>
      <div className="container">
      <h1>Valorant Bingo!</h1>
      <p>Description!</p>

      <div className = "cards-grid">
      {cards.map((card, index) => (
        <div
          key = {index}
          className = {`card
          ${marked.includes(index) ? 'marked' : ''}
          `}
        onClick = {()=> handleCardClick(index)}>
        {card}
        </div>
      ))}
      </div>

      </div>
      <p>bottom text</p>
    </>
    
  )
}

export default App
