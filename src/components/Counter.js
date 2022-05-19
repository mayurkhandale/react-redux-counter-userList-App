import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  increment,
  decrement,
  byincre,
  clearAll,
} from '../redux/features/counter.feature';
const Counter = () => {
  const store = useSelector((state) => {
    return state['counter'];
  });
  const dispatch = useDispatch();

  console.log(store.count, '88');
  const { count } = store;
  console.log(count);
  const incre = () => {
    console.log('in');

    dispatch(increment());
  };

  const decre = () => {
    console.log('inn');
    dispatch(decrement());
  };
  const byfive = () => {
    console.log('by');
    dispatch(byincre(5));
  };
  const clearState = () => {
    dispatch(clearAll());
  };
  return (
    <>
      <h1>Counter</h1>
      <button onClick={incre}>+</button> {count}{' '}
      <button onClick={decre}>-</button>
      <h3>
        <span onClick={byfive}>by5</span>
      </h3>
      <button onClick={clearState}>ClearAll</button>
    </>
  );
};

export default Counter;
