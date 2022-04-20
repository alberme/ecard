import './styles/App.css';
import Edit from './pages/Edit';
import Home from './pages/Home';
import Preview from './pages/Preview';
import { useState } from 'react';

function App() {
  const query = new URLSearchParams(window.location.search);
  const hasQuery = [...query.keys()].length > 0;
  const [greetingData, setGreetingData] = useState({ 
    greeting: query.get('greeting') || '',
    body: query.get('body') || '',
    closing: query.get('closing') || '',
  });
  const [status, setStatus] = useState(hasQuery ? 'preview' : 'init');

  const renderApp = () => {
    switch(status) {
      case 'init':
        return <Home setStatus={setStatus}/>;
      case 'customize':
        return <Edit
          setGreetingData={setGreetingData}
          setStatus={setStatus}
          greetingData={greetingData}
        />;
      case 'preview':
        return <Preview
          greetingData={greetingData}
          setStatus={setStatus}
          showCustomize={!hasQuery}
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
