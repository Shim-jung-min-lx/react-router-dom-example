import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import store from './store';
import { up } from './counterSlice';
/* 
function reducer(state, action) {
  if (action.type === 'up') {
    return { ...state, value: state.value + action.step }
  }
  return state;
}
const initalState = { value: 0 }
const store = createStore(reducer, initalState);
*/

function Counter() {
  const dispatch = useDispatch();
  const count = useSelector(state => state.counter.value);
  return <div>
    <button onClick={() => {
      // dispatch({ type: 'counterSlice/up', step: 2 });
      dispatch(up(2)); // 단일 파라미터는 payload로 정의됨
    }}>+</button> {count}
  </div>
}

export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Counter></Counter>
      </div>
    </Provider>
  )
}