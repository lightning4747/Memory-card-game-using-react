import { useEffect, useState } from "react";

export const useGameLogic = (cardValue) => {

    const [cards,setCards] = useState([])
    const [flippedCards,setFlippedCards] = useState([]) //hold only two card
    const [matchedCards,setMacthCards] = useState([]) 
    const [scores, setScores] = useState(0)
    const [moves, setMoves] = useState(0)

    const shuffileArray = (array) => {
      const shuffle = [...array];
      for(let i = shuffle.length - 1; i>0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffle[i], shuffle[j]] = [shuffle[j],shuffle[i]];
      }
      return shuffle
    }

    

    const initializeGame = ()=> {
      const shuffled = shuffileArray(cardValue);
      const finalCards = shuffled.map((value,index)=> (
        {
          id: index,
          value,
          isFlipped: false,
          isMatched: false
        }
      ));

      setCards(finalCards);
      setFlippedCards([])
      setMacthCards([])
      setMoves(0)
      setScores(0)
    };

    useEffect(()=> {
      initializeGame();
    },[]);

    const handleCardClick = (card) => {
      if( card.isFlipped || card.isMatched || flippedCards.length ==2) {
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

      setScores((prev) => prev+100)
        
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
    setMoves((prev) => prev +1)
    };

    const isGameCompleted = matchedCards.length === cardValue.length;

    return {cards,scores,moves,isGameCompleted,initializeGame,handleCardClick}
}