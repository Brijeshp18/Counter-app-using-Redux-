import React from "react";
import "./counter.css";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement } from "../Redux/Reducer/Reducer";
function Counter() {
  const count = useSelector((state)=>state.counter.value)
  const dispatch = useDispatch()
  return (
    <div className="container">
      <h1 className="title">React Redux Example</h1>
      <p className="counter">{count}</p>
      <div className="buttons">
        <button onClick={()=>dispatch(increment())} className="counter-button">Increment</button>
        <button onClick={()=>dispatch(decrement())} className="counter-button">Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
