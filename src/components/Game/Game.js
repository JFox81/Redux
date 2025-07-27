import React, { useState, useEffect } from 'react';
import store from '../../store.js';
import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';

const Game = () => {
  const [state, setState] = useState(store.getState());

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      setState(store.getState());
    });
    return unsubscribe;
  }, []);

  const { currentPlayer, field, winner } = state;
  const isGameEnded = !!winner || field.every(cell => cell !== null && cell !== '');
  const isDraw = !winner && field.every(cell => cell !== null && cell !== '');

  const handleCellClick = (index) => {
    if (field[index] || winner) return;
    store.dispatch({ type: 'MAKE_MOVE', payload: { index } });
  };

  const handleRestart = () => {
    store.dispatch({ type: 'RESET_GAME' });
  };

  return (
    <GameLayout onRestart={handleRestart}>
      <Information
        currentPlayer={currentPlayer}
        isGameEnded={isGameEnded}
        isDraw={isDraw}
      />
      <Field cells={field} onCellClick={handleCellClick} />
    </GameLayout>
  );
};

export default Game;
