import React, { useState } from "react";

export default function useInputData(state) {
  const [inputData, setInputData] = useState(state);
  const [inputChange, setInputChange] = useState(false);

  const manageChange = (e) => {
    setInputData(e.target.value);
    setInputChange(true);
  };
  return {
    inputData,
    manageChange,
    setInputData,
    inputChange,
    setInputChange
  };
}