import React from 'react';
import './GameLayout.module.css';

const GameLayout = ({ children, onRestart }) => {
  return (
    <div className="game-layout">
      <button onClick={onRestart}>Restart</button>
      {children}
    </div>
  );
};

export default GameLayout;
