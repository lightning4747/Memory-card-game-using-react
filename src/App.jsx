import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GamerHeader } from "./components/GameHeader"
import { WinMessage } from "./components/winmessage";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  const cardValue = [
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺",
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺"
    ];

 const {cards,scores,moves,isGameCompleted,initializeGame,handleCardClick} = useGameLogic(cardValue);  
 
 return (
    <div className="app">
      <GamerHeader score={scores} moves={moves} onReset={initializeGame}/>
      {isGameCompleted &&   <WinMessage moves ={moves}/>}

      <div className="cards-grid">
        {
          cards.map((card, index)=> (
            <Card key={index} card={card} onClick={handleCardClick}/>
          ))
        }
      </div>
    </div>
  );
}

export default App
