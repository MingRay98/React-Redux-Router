import React, { useState } from "react";
import { connect } from "react-redux";
import DecoratorExample from "../components/DecoratorExample";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  console.log(props);
  return (
    <div>
      <DecoratorExample />
      <div>hook count state: {count}</div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <div>props count state by redux: {props.count}</div>
    </div>
  );
};

// export default connect((state) => state.rootReducer)(Counter);
export default connect((state) => state.rootReducer)(Counter);
