import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GamerHeader } from "./components/GameHeader"

function App() {
  const cardValue = [
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺",
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺"
    ];

    const [cards,setCards] = useState([])

    const initializeGame = ()=> {
      const finalCards = cardValue.map((value,index)=> (
        {
          id: index,
          value,
          isFlipped: false,
          isMatched: false
        }
      ));

      setCards(finalCards);
    };

    useEffect(()=> {
      initializeGame();
    },[]);

    const handleCardClick = (card) => {
      if( card.isFlipped || card.isMatched) {
        return;
      }

      //uc = updated card
      const newCards = cards.map((uc)=> {
        if(uc.id === card.id) {
          return {...uc, isFlipped: true};
        }

        else {
          return uc
        }

    });
    setCards(newCards);
    };

  return (
    <div className="app">
      <GamerHeader score={3} moves={10}/>
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
