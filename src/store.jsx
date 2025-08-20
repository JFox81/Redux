import { createStore } from 'redux';
import gameReducer from './reducer.jsx';

export const store = createStore(gameReducer);

export default store;
