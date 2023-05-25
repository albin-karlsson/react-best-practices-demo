import React, { useState } from "react";

function useCounter() {
  const [value, setValue] = useState(0);

  function incrementValue() {
    setValue(value + 1);
  }

  return { value, incrementValue };
}

export default useCounter;
