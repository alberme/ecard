import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomizeMessage from './components/CustomizeMessage';
import Welcome from './components/Welcome';
import { useState } from 'react';

function App() {
  const [greetingData, setGreetingData] = useState({ 
    greeting: "",
    body: "",
    closing: "",
  });
  const [status, setStatus] = useState('init');
  
  const renderApp = () => {
    switch(status) {
      case 'init':
        return <Welcome setStatus={setStatus}/>;
      case 'customize':
        return <CustomizeMessage
          setGreetingData={setGreetingData}
          setStatus={setStatus}
        />
      case 'preview':
        return <GreetingCard
          greetingData={greetingData}
          setStatus={setStatus}
        />
      default:
        return;
    }
  }

  return (
    <div className='App'>      
    {
      renderApp()
    }
    </div>
  );
}

export default App;
