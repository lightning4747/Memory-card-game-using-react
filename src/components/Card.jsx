export const Card = ({card ,onClick }) => {
    return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={()=> onClick(card)}>
        <div className="card-front">?</div>
        <div className="card-back">
            {card.value}
        </div>
    </div>
    );  
};