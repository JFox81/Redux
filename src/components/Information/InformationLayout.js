import React from 'react';
import './InformationLayout.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className="information-layout">
      {isGameEnded ? (
        isDraw ? (
          <div>Ничья!</div>
        ) : (
          <div>Победил: {currentPlayer === 'X' ? 'O' : 'X'}</div>
        )
      ) : (
        <div>Ходит: {currentPlayer}</div>
      )}
    </div>
  );
};

export default InformationLayout;
