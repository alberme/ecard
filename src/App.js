import './App.css';
import CustomizeMessage from './components/CustomizeMessage';
import Welcome from './components/Welcome';
import Preview from './components/Preview';
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
          greetingData={greetingData}
        />;
      case 'preview':
        return <Preview
          greetingData={greetingData}
          setStatus={setStatus}
        />;
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
