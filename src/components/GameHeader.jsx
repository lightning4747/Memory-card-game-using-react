
export const GamerHeader = ({score, moves}) => {

    return (
        <div className="game-header">
            <h1>Memory Card Game</h1>
            <div className="stats">
                <div className="stat-item">
                    
                       <span className="stat-label">Score:</span>{" "}
                       <span className="stat-value">{score}</span> 
                    
                </div>
                
                <div className="stat-item">

                    <span className="stat-label">Move:</span>
                    <span className="stat-value">{moves}</span> 

                </div>
            </div>
        </div>
        
    )
}