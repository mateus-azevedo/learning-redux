import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { sum } from "../store/Calculator/Calculator.actions";

function Calculator() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.calculator);

  //dispatch(sum)

  return (
    <>
      <input type="text" placeholder="a" />
      <input type="text" placeholder="b" />

      <button
        onClick={() => {
          dispatch(sum(6, 4));
        }}
      >
        Somar
      </button>
      <button>Subtrair</button>

      <div>{result}</div>
    </>
  );
}

export default Calculator;
