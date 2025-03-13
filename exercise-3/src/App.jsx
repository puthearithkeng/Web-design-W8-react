import React, { useState } from "react";
import "./index.css";

function App() {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [result, setResult] = useState("");
  const [isError, setIsError] = useState(false);

  function onA(event) {
    setA(event.target.value);
    setResult("");
    setIsError(false);
  }

  function onB(event) {
    setB(event.target.value);
    setResult("");
    setIsError(false);
  }

  function handleCompute() {
    const numA = parseFloat(a);
    const numB = parseFloat(b);
    if (isNaN(numA) || isNaN(numB)) {
      setResult("Error: Invalid input");
      setIsError(true);
    } else {
      setResult(numA + numB);
      setIsError(false);
    }
  }

  return (
    <main>
      <h1>Calculator</h1>
      <label>A =</label>
      <input onChange={onA} value={a} />

      <label>B =</label>
      <input onChange={onB} value={b} />

      <label>A + B =</label>
      <input disabled value={result} className={isError ? "error" : ""} />
      <button onClick={handleCompute}>Compute</button>
    </main>
  );
}

export default App;