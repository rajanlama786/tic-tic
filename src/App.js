import React, { useState } from 'react';

import './App.css';

const App = () => {

  const [number, setNumber] = useState(0);

  const prev = () => { setNumber(number - 1) }

  const next = (number) => {
    setNumber(number + 1)
  }


  return (
    <div className="App">
      <div className="DisplayBox">
        {number}
      </div>
      <button onClick={() => prev(number)}>Prev</button>
      <button onClick={() => next(number)}>Next</button>
    </div>
  );
}

export default App