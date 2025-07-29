import React from 'react';
import styles from './FieldLayout.module.css';

const FieldLayout = ({ cells, onCellClick }) => {
  return (
    <div className={styles.field}>
      {cells.map((cell, idx) => (
        <button key={idx} className={styles.cell} onClick={() => onCellClick(idx)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default FieldLayout;
