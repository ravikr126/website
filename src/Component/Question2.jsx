import React, { useState } from 'react';
// import './styles.css'; // Import CSS file

function PalindromeChecker() {
  const [inputValue, setInputValue] = useState('');
  const [isPalindrome, setIsPalindrome] = useState(null);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleButtonClick = () => {
    // Remove all non-alphanumeric characters and convert to lowercase
    const cleanInput = inputValue.replace(/[^0-9a-z]/gi, '').toLowerCase();

    // Check if the cleaned input is equal to its reverse
    const reversedInput = cleanInput.split('').reverse().join('');
    setIsPalindrome(cleanInput === reversedInput);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleButtonClick();
    }
  };

  return (
    <div className="con">
      <h1>Palindrome Checker</h1>
      <div className="input-con">
        <label htmlFor="input-field">Enter text or number:</label>
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
      {isPalindrome !== null && (
        <p className={`result ${isPalindrome ? 'palindrome' : 'not-palindrome'}`}>
          {isPalindrome ? 'Palindrome!' : 'Not a palindrome.'}
        </p>
      )}
    </div>
  );
}

export default PalindromeChecker;
