import './App.css';
import GreetingCard from './components/GreetingCard';
import CustomizeMessage from './components/CustomizeMessage';
import Welcome from './components/Welcome';
import Share from './components/Share';
import { useState } from 'react';

function App() {
  const query = new URLSearchParams(window.location.search);
  const [greetingData, setGreetingData] = useState({ 
    greeting: query.get('greeting') || '',
    body: query.get('body') || '',
    closing: query.get('closing') || '',
  });
  const [status, setStatus] = useState([...query.keys()].length > 0 ? 'preview' : 'init');

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
        return (
          <>
            <GreetingCard
              greetingData={greetingData}
              setStatus={setStatus}
            />
            <Share
              show={showShare}
              setShowShare={setShowShare}
              greetingData={greetingData}
            />
            <button
              onClick={() => setShowShare(true)}
            >
              Share Greeting
            </button>
            <button
              onClick={() => setStatus('customize')}
            >
              Customize
            </button>
          </>
        );
      default:
        return;
    }
  }

  return (
    <div className='App'>      
    { renderApp() }
    </div>
  );
}

export default App;
