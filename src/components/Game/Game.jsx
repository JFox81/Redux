import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import GameLayout from './GameLayout';
import Information from '../Information/Information';
import Field from '../Field/Field';

const Game = () => {
  const field = useSelector(state => state.field);
  const currentPlayer = useSelector(state => state.currentPlayer);
  const winner = useSelector(state => state.winner);
  const dispatch = useDispatch();

  const isGameEnded = !!winner || field.every(cell => cell !== null && cell !== '');
  const isDraw = !winner && field.every(cell => cell !== null && cell !== '');

  const handleCellClick = (index) => {
    if (field[index] || winner) return;
    dispatch({ type: 'MAKE_MOVE', payload: { index } });
  };

  const handleRestart = () => {
    dispatch({ type: 'RESET_GAME' });
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
