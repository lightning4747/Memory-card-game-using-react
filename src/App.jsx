import { useEffect, useState } from "react";
import { Card } from "./components/Card";
import { GamerHeader } from "./components/GameHeader"

function App() {
  const cardValue = [
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺",
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺"
    ];

    const [cards,setCards] = useState([])
    const [flippedCards,setFlippedCards] = useState([]) //hold only two card
    const [matchedCards,setMacthCards] = useState([]) 

    const initializeGame = ()=> {
      //need to add the shuffle logic
      
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
    console.log(newCards);

    const newFlippedCards = [...flippedCards, card.id] //holds 0 to 2 cards
    setFlippedCards(newFlippedCards);

    if(flippedCards.length === 1) { //already has a card 
      const firstCard = cards[flippedCards[0]];
      console.log(firstCard);
      if(firstCard.value === card.value) { //previous and the current are the same?
        setTimeout(()=> {
        setMacthCards((prev) => [...prev, firstCard.id, card.id]);
        
        setCards( (prev) => prev.map((c)=> {
          if(c.id === card.id || c.id === firstCard.id) {
            return {...c, isMatched: true};
          }
          else {
            return c;
          }
        }));
        setFlippedCards([]);
      },500);
        
      }

      else {
      setTimeout(() => {
        setCards(prev =>
          prev.map(c =>
            newFlippedCards.includes(c.id)
              ? { ...c, isFlipped: false }
              : c
          )
        );
        setFlippedCards([]);
      }, 1000);
        
      }
    }
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
