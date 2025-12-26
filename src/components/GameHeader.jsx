import React from 'react';

export const GameHeader = ({ score, moves, onReset }) => {
  return (
    <header className="game-header">
      <h1>Memory Card</h1>
      
      <div className="stats">
        <div className="stat-item">
          <span className="stat-label">Moves</span>
          <span className="stat-value">{moves}</span>
        </div>
        <div className="stat-item">
          <span className="stat-label">Score</span>
          <span className="stat-value">{score}</span>
        </div>
      </div>

      <button className="reset-btn" onClick={onReset}>
        Restart Game
      </button>
    </header>
  );
};