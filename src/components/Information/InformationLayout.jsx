import React from 'react';
import styles from './InformationLayout.module.css';

const InformationLayout = ({ currentPlayer, isGameEnded, isDraw }) => {
  return (
    <div className={styles.information}>
      {isGameEnded ? (
        isDraw ? (
          <div className={styles.draw}>Ничья!</div>
        ) : (
          <div className={styles.winner}>Победил: {currentPlayer === 'X' ? 'O' : 'X'}</div>
        )
      ) : (
        <div className={styles.currentPlayer}>Ходит: {currentPlayer}</div>
      )}
    </div>
  );
};

export default InformationLayout;
