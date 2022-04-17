import { useState } from 'react';
import GreetingCard from '../GreetingCard';
import Share from '../Share';
import './styles.css';

export default function Preview ({ greetingData, setStatus, showCustomize }) {
  const [showShare, setShowShare] = useState(false);
  
  return (
    <div className="preview-container">
      <GreetingCard
        greetingData={greetingData}
        setStatus={setStatus}
      />
      <Share
        show={showShare}
        setShowShare={setShowShare}
        greetingData={greetingData}
      />
      <div className="preview-buttons">
        <button
          onClick={() => setShowShare(true)}
        >
          Share Greeting
        </button>
        {
          showCustomize && (
            <button
              onClick={() => setStatus('customize')}
            >
              Customize
            </button>
          )
        }
      </div>
    </div>
  )
}