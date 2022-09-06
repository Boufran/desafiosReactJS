import { useState } from "react";
const Counter = () => {
  const [initialState, setInitialState] = useState(0);
  //   let initialState = 0;

  const suma = () => {
    setInitialState(initialState + 1);
    // initialState = initialState + 1;
  };
  return (
    <div>
      Counter
      <h3>{initialState} </h3>
      <button onClick={suma}>Suma Uno</button>
    </div>
  );
};

export default Counter;
