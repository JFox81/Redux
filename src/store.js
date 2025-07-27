import { createStore } from 'redux';
import gameReducer from './reducer.js';

export const store = createStore(gameReducer); // не создан store

// примеры как ты должна получать и устанавливать состояние
// store.getState()    // получение состояния
// store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' }); // установка состояния

export default store;
