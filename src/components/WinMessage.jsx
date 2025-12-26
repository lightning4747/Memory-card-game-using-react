import React from 'react';

export const WinMessage = ({ moves, onRestart }) => {
  return (
    <div className="win-message">
      <h2>Congratulations</h2>
      <p>You completed the game in: {moves} moves</p>
      
      <button 
        className="reset-btn" 
        style={{ marginTop: '20px' }} 
        onClick={onRestart}
      >
        Play Again
      </button>
    </div>
  );
};