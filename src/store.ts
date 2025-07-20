import React from 'react';
import { store, increment, decrement } from './store';
import { useReduxSelector } from './useReduxSelector';

export function Counter() {
  const count = useReduxSelector(state => state.count);

  return (
    <div>
      <button onClick={() => store.dispatch(decrement())}>-</button>
      <span>{count}</span>
      <button onClick={() => store.dispatch(increment())}>+</button>
    </div>
  );
}
