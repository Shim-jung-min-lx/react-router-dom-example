import React, { useState, useReducer } from "react";

export default function App() {
  // function countReducer(oldCount, action) {
  //   if (action === 'UP') {
  //     return oldCount + 1;
  //   } else if (action === 'DOWN') {
  //     return oldCount - 1;
  //   } else if (action === 'RESET') {
  //     return 0;
  //   }
  // }
  // const [count, countDispatch] = useReducer(countReducer,0);
  // function down() {
  //   countDispatch('DOWN');
  // }
  // function reset() {
  //   countDispatch('RESET');
  // }
  // function up() {
  //   countDispatch('UP');
  // }
  // return (
  //   <div>
  //     <input type="button" value="-" onClick={down} />
  //     <input type="button" value="0" onClick={reset} />
  //     <input type="button" value="+" onClick={up} />
  //     <span>{count}</span>
  //   </div>
  // )

  /* state를 사용자가 직접 사용하지 않고 action 값만 준다 
  state에 대한 구체적인 처리는 Reducer 함수가 다루도록 처리 */

  const [number, setNumber] = useState(1);
  function countReducer(oldCount, action) {
    if (action.type === 'UP') {
      return oldCount + action.number;
    } else if (action.type === 'DOWN') {
      return oldCount - action.number;
    } else if (action.type === 'RESET') {
      return 0;
    }
  }
  const [count, countDispatch] = useReducer(countReducer, 0);
  function down() {
    countDispatch({ type: 'DOWN', number: number });
  }
  function reset() {
    countDispatch({ type: 'RESET', number: number });
  }
  function up() {
    countDispatch({ type: 'UP', number: number });
  }
  function changeNumber(event) {
    setNumber(Number(event.target.value));
  }
  return (
    <div>
      <input type="button" value="-" onClick={down} />
      <input type="button" value="0" onClick={reset} />
      <input type="button" value="+" onClick={up} />
      <input type="text" value={number} onChange={changeNumber} />
      <span>{count}</span>
    </div>
  )

  /* Reducer 함수는 순수 함수로서 다른 state에 직접 접근하지 않도록 설계하고 외부의 영향을 받지 않아야 한다
  - input과 output으로만 조작되어야 한다 */
  /* Dispatch에서 Reducer로 넘어가는 action에 object로 값을 넣는다 */
}