import React from 'react';
import uncleBuck from './uncle-buck.gif';
import './App.css';

import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

function App() {
  const { width, height } = useWindowSize()
  return (
    <div className="App">
    <Confetti
      width={width}
      height={height}
    />
      <header className="App-header">
        <h1>Happy Birthday Sam Chan!</h1>
        <img src={uncleBuck} alt="logo" />
        <h2>Top 3 Reasons Sam Is Awesome:</h2>
        <div style={{display: 'flex', textAlign: 'left'}}>
          <div>
            <p>1. She is willing to give a drum roll without needing to know why</p>
            <p>2. She gets excited for other people who are putting garlic sauce on their Chicken and Rice</p>
            <p>3. She writes awesome code, makes the team look good, and is super cool</p>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
