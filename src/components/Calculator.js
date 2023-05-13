import React, { useState } from "react";

function Calculator() {
  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  function handleNum1Change(event) {
    setNum1(event.target.value);
  }

  function handleNum2Change(event) {
    setNum2(event.target.value);
  }

  function handleAddition() {
    if (validateInputs()) {
      setResult(parseFloat(num1) + parseFloat(num2));
      setError(null);
    }
  }

  function handleSubtraction() {
    if (validateInputs()) {
      setResult(parseFloat(num1) - parseFloat(num2));
      setError(null);
    }
  }

  function handleMultiplication() {
    if (validateInputs()) {
      setResult(parseFloat(num1) * parseFloat(num2));
      setError(null);
    }
  }

  function handleDivision() {
    if (validateInputs()) {
      if (parseFloat(num2) === 0) {
        setError("Error: Division by zero");
        setResult(null);
      } else {
        setResult(parseFloat(num1) / parseFloat(num2));
        setError(null);
      }
    }
  }

  function validateInputs() {
    if (num1.trim() === "") {
      setError("Error: Num1 cannot be empty");
      setResult(null);
      return false;
    } else if (num2.trim() === "") {
      setError("Error: Num2 cannot be empty");
      setResult(null);
      return false;
    } else if (!/^-?\d*\.?\d+$/.test(num1) || !/^-?\d*\.?\d+$/.test(num2)) {
      setError("Error: Please enter valid numbers");
      setResult(null);
      return false;
    } else {
      return true;
    }
  }

  return (
    <div className="main">
      <h1>React Calculator</h1>
      <input
        placeholder="Num1"
        type="text"
        value={num1}
        onChange={handleNum1Change}
      />
      <br />
      <input
        placeholder="Num2"
        type="text"
        value={num2}
        onChange={handleNum2Change}
      />
      <br />
      <section className="btns">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>

        {result !== null && (
          <div className="success">
            <p>Result = {result}</p>
            <div style={{ color: "green" }}>
              Success : Your result is shown above!
            </div>
          </div>
        )}
        {error !== null && (
          <div className="error" style={{ color: "red" }}>
            {error}
          </div>
        )}
      </section>
    </div>
  );
}

export default Calculator;
