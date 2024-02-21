import React from "react";
import { createStore } from "redux";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createSlice, configureStore } from '@reduxjs/toolkit';

const counterSlice = createSlice({
  name: 'counterSlice',
  initialState: { value: 0 },
  reducers: {
    up: (state, action) => {
      console.log(action);
      state.value = state.value + action.payload;
    }
  }
});

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer
  }
});

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
      dispatch(counterSlice.actions.up(2)); // 단일 파라미터는 payload로 정의됨
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