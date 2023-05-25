import React, { useState } from "react";
import useCounter from "../hooks/useCounter";

function Counter() {
  const { value, incrementValue } = useCounter();

  return (
    <div>
      <button onClick={incrementValue}>Add 1</button>
      <p>{value}</p>
    </div>
  );
}

export default Counter;
