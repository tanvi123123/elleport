// pages/components/ButtonInput.js

// pages/components/ButtonInput.js
import { useState } from 'react';

const ButtonInput = () => {
  const [inputValue, setInputValue] = useState('');
  const [message, setMessage] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/binput', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ inputValue }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Enter text"
      />
      <button onClick={handleSubmit}>Submit</button>
      <p>{message}</p>
    </div>
  );
};

export default ButtonInput;
