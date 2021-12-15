import { useState } from 'react';
import snow from '../images/snow.jpg';


function GreetingCard({ greeting, body, closing, setCustomize }) {
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
      </button>
    </div>
  );
}

export default GreetingCard;
