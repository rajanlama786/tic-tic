import React, { useState, useEffect, useCallback } from 'react';

import './App.css';

const App = () => {

  const children = [-2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const delay = 2000;

  const [number, setNumber] = useState(children[0]);

  const [index, setIndex] = useState(0);

  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(true);

  const toggleRunning = useCallback(() => setRunning(run => !run), []);

  let interval;

  useEffect(() => {
    if (!running) {
      // setSeconds(0); // if you want to reset it as well
      return;
    }
    const interval = setInterval(() => {
      setSeconds(seconds => seconds + 1);
      if (children.length > index) {
        setIndex(index => index + 1)
        setNumber(children[index])
      } else {
        setIndex(0)
        setNumber(children[index])
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [running, children]);

  const prev = () => {
    if (index > 0) {
      setIndex(index - 1)
      setNumber(children[index])
    } else {
      setIndex(children.length)
      setNumber(children[index])
    }
  }

  const next = () => {
    if (children.length > index) {
      setIndex(index + 1)
      setNumber(children[index])
    } else {
      setIndex(0)
      setNumber(children[index])
    }
    console.log(index);
  }


  return (
    <div className="App">
      <header >
        {seconds} seconds have elapsed since mounting.
      </header>
      <div className="DisplayBox">
        {number}
      </div>
      <button
        onClick={toggleRunning}
      >
        {running ? 'Stop' : 'Play'}
      </button>
      <button onClick={() => prev()}>Prev</button>
      <button onClick={() => next()}>Next</button>
    </div>
  );
}

export default App