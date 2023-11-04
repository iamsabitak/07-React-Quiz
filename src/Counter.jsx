import React, { useReducer } from "react";

const reducer = (state, action) => {
  //   console.log(state);
  if (action.type === "inc") {
    return state + 1;
  }
  if (action.type === "dec") {
    return state - 1;
  }
  return state;
};
function Counter() {
  const [state, dispatch] = useReducer(reducer, 0);
  return (
    <div>
      <button onClick={() => dispatch({ type: "dec" })}>-</button>
      <span>{state}</span>
      <button onClick={() => dispatch({ type: "inc" })}>+</button>
    </div>
  );
}

export default Counter;
