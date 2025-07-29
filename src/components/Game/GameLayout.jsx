import React from 'react';
import styles from './GameLayout.module.css';

const GameLayout = ({ children, onRestart }) => {
  return (
    <div className={styles.game}>
      <button className={styles.restartButton} onClick={onRestart}>Restart</button>
      {children}
    </div>
  );
};

export default GameLayout;
