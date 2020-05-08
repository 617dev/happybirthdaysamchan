import React from 'react';
import ReactAudioPlayer from 'react-audio-player';
import useWindowSize from 'react-use/lib/useWindowSize'
import Confetti from 'react-confetti'

import babyYoda from './baby-yoda-bday.gif';
import happyBdayMp3 from './happyBday.mp3';
import './App.css';

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
        <img src={babyYoda} alt="baby yoda" />
        <h2>Top 3 Reasons Sam Is Awesome:</h2>
        <div style={{display: 'flex', textAlign: 'left'}}>
          <div>
            <p>1. She is willing to give a drum roll without needing to know why</p>
            <p>2. She gets excited for other people who are putting garlic sauce on their Chicken and Rice</p>
            <p>3. She writes awesome code, makes the team look good, and is super cool</p>
            <p>4. She is the @bdc_dev_garage social media manager, and brand police! 🙌</p>
          </div>
          <ReactAudioPlayer src={happyBdayMp3} autoPlay={true}/>
        </div>
      </header>
    </div>
  );
}

export default App;
