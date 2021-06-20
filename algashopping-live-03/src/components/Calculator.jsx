import React from "react";
import { useSelector } from "react-redux";

function Calculator() {
  const result = useSelector((state) => state.calculator);

  return (
    <>
      <input type="text" placeholder="a" />
      <input type="text" placeholder="b" />

      <button>Somar</button>
      <button>Subtrair</button>

      <div>{result}</div>
    </>
  );
}

export default Calculator;
