import './App.css';
import GreetingCard from './components/GreetingCard';
import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState("Dear Mom");
  const [body, setBody] = useState("Have a comforting and joyous holiday!");
  const [closing, setClosing] = useState("Love, your son Juan");

  return (
    <GreetingCard 
      greeting={greeting}
      body={body}
      closing={closing}
    />
  );
}

export default App;
