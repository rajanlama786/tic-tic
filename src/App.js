import React, { useState } from 'react';

import './App.css';

const App = () => {

  const children = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const delay = 2000;

  const [number, setNumber] = useState(children[0]);

  const [index, setIndex] = useState(0);


  setTimeout(() => {
    if (children.length > index) {
      setIndex(index + 1)
      //console.log(index);
      setNumber(children[index])
      console.log(index);
    } else {
      setIndex(0)
      setNumber(children[index])
      console.log(index);
    }
  }, delay);



  const prev = () => {
    setIndex(index + 1)
    setNumber(children[index])
    console.log(index);
  }

  const next = () => {
    setIndex(index - 1)
    setNumber(children[index])
    console.log(index);
  }


  return (
    <div className="App">
      <div className="DisplayBox">
        {number}
      </div>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
}

export default App