import { Card } from "./components/Card";
import { GamerHeader } from "./components/GameHeader"

function App() {
  const cardValue = [
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺",
        "😈", "🫣", "💀", "🤯", "👁️‍🗨️", "🫥", "🥷", "😺"
    ];

  return (
    <div className="app">
      <GamerHeader score={3} moves={10}/>
      <div className="cards-grid">
        {
          cardValue.map((card, index)=> (
            <Card key={index} card={card}/>
          ))
        }
      </div>
    </div>
  );
}

export default App
