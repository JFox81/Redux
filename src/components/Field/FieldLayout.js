import React from 'react';
import './FieldLayout.module.css';

const FieldLayout = ({ cells, onCellClick }) => {
  return (
    <div className="field-layout">
      {cells.map((cell, idx) => (
        <button key={idx} className="cell" onClick={() => onCellClick(idx)}>
          {cell}
        </button>
      ))}
    </div>
  );
};

export default FieldLayout;
