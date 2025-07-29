import { createStore } from 'redux';
import gameReducer from './reducer.jsx';

export const store = createStore(gameReducer); // не создан store


store.getState()    // получение состояния
store.dispatch({ type: 'SET_CURRENT_PLAYER', payload: 'X' }); // установка состояния

export default store;
