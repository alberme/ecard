import { useState } from 'react';
import snow from '../images/snow.jpg';


function GreetingCard({ greetingData, setStatus }) {
  const { greeting, body, closing } = greetingData;
  return (
    <div className="App-header">
      <img src={snow} className="App-logo" alt="snow" />
      <p>{greeting}</p>
      <p>{body}</p>
      <p>{closing}</p>
      <button
        onClick={() => console.log('share!')}
      >
        Share Greeting
      </button>
      <button
        onClick={() => setStatus('customize')}
      >
        Customize
      </button>
    </div>
  );
}

export default GreetingCard;
