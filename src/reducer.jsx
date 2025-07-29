
const initialState = {
  field: Array(9).fill(null),
  currentPlayer: 'X',
  winner: null,
};

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case 'MAKE_MOVE': {
      const { index } = action.payload;
      if (state.field[index] || state.winner) return state;
      const newField = state.field.slice();
      newField[index] = state.currentPlayer;
      const winner = calculateWinner(newField);
      return {
        ...state,
        field: newField,
        currentPlayer: state.currentPlayer === 'X' ? 'O' : 'X',
        winner,
      };
    }
    case 'RESET_GAME':
      return initialState;
    case 'SET_CURRENT_PLAYER':
      return {
        ...state,
        currentPlayer: action.payload,
      };
    default:
      return state;
  }
}


function calculateWinner(field) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let line of lines) {
    const [a, b, c] = line;
    if (field[a] && field[a] === field[b] && field[a] === field[c]) {
      return field[a];
    }
  }
  return null;
}

export default gameReducer;
