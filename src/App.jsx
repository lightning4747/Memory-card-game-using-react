import React from 'react';
import { Card } from "./components/Card";
import { GameHeader } from "./components/GameHeader";
import { WinMessage } from "./components/WinMessage";
import { useGameLogic } from "./hooks/useGameLogic";

function App() {
  // 16 cards total (8 pairs)
  const cardValue = [
    "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺",
    "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺"
  ];

  const { 
    cards, 
    scores, 
    moves, 
    isGameCompleted, 
    initializeGame, 
    handleCardClick 
  } = useGameLogic(cardValue);

  return (
    <div className="app">
      <GameHeader 
        score={scores} 
        moves={moves} 
        onReset={initializeGame} 
      />
      
      {/* Only render WinMessage if game is won */}
      {isGameCompleted && (
        <WinMessage moves={moves} onRestart={initializeGame} />
      )}

      <div className="cards-grid">
        {cards.map((card) => (

          <Card 
            key={card.id} 
            card={card} 
            onClick={handleCardClick} 
          />
        ))}
      </div>
    </div>
  );
}

export default App;