import React, { useState } from 'react';
import './styles.css'; // Import CSS file

function NumberChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isNumberCorrect, setIsNumberCorrect] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Check if the input contains even numbers in even index and odd numbers in odd index
    const inputArray = inputValue.split('');
    const isValid = inputArray.every((num, index) => {
      const isEvenIndex = index % 2 === 0;
      const isEvenNumber = num % 2 === 0;
      return isEvenIndex ? isEvenNumber : !isEvenNumber;
    });

    setIsNumberCorrect(isValid);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div className="container">
      <h1>Number Checker</h1>
      <div className="input-container">
        <label htmlFor="input-field">Enter a number:</label>
        <input
          type="text"
          id="input-field"
          value={inputValue}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          required
        />
        <button onClick={handleButtonClick}>Check</button>
      </div>
      {isNumberCorrect !== null && (
        <p className={`result ${isNumberCorrect ? 'correct' : 'incorrect'}`}>
          {isNumberCorrect ? 'Number is correct!' : 'Number is incorrect.'}
        </p>
      )}
    </div>
  );
}

export default NumberChecker;
