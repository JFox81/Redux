const initialState = {
  field: Array(9).fill(null), // игровое поле
  currentPlayer: 'X', // текущий игрок
  status: 'playing', // статус игры: 'playing', 'win', 'draw'
};

export const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'SET_CURRENT_PLAYER':
      return { ...state, currentPlayer: payload };
    case 'SET_FIELD':
      return { ...state, field: payload };
    case 'SET_STATUS':
      return { ...state, status: payload };
    case 'RESTART_GAME':
      return initialState;
    default:
      return state;
  }
};

export { initialState };
