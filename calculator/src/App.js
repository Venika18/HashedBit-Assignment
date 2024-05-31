import React, { useState } from 'react';
import './App.css';

function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    setResult(parseFloat(num1) / parseFloat(num2));
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1>Calculator</h1>
        <div className="input-container">
          <input
            type="number"
            placeholder="First Number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
          />
          <input
            type="number"
            placeholder="Second Number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
          />
        </div>
        <div className="buttons-container">
          <button onClick={handleAddition}>+</button>
          <button onClick={handleSubtraction}>-</button>
          <button onClick={handleMultiplication}>*</button>
          <button onClick={handleDivision}>/</button>
        </div>
        <div className="result-container">
          <h2>Result: {result !== null ? result : 'No calculation yet'}</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
