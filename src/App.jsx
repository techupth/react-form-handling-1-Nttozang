import "./App.css";
import React, { useState } from 'react';

function App() {
  const [inputValue, setInputValue] = useState('Greeting Message');
  const [newInputValue, setNewInputValue] = useState('');


  return (
    <div className="App">
      <div className="greeting-container">{inputValue}</div>
      <div className="input-container">
        <label htmlFor="greeting-message">New Greeting Message</label>
        <input 
          id="greeting-message" 
          type="text" 
          value={newInputValue} 
          onChange={(event) => {setNewInputValue(event.target.value)}} 
        />
      </div>

      <div className="buttons">
        <button onClick={() => setInputValue(newInputValue)}>Update text</button>
      </div>
    </div>
  );
}

export default App;