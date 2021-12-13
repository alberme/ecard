import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomizeMessage from './components/CustomizeMessage';
import { useState } from 'react';

function App() {
  const [greeting, setGreeting] = useState("Dear Mom");
  const [body, setBody] = useState("Have a comforting and joyous holiday!");
  const [closing, setClosing] = useState("Love, your son Juan");
  const [customize, setCustomize] = useState(false);

  return (
    <>
    {
      customize 
       ? <CustomizeMessage />
       : <GreetingCard 
        greeting={greeting}
        body={body}
        closing={closing}
        setCustomize={setCustomize}
      />
    }
    </>
  );
}

export default App;
