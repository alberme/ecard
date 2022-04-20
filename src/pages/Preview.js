import { useState } from 'react';
import Ecard from '../components/Ecard';
import Share from '../components/Share';
import '../styles/Preview.css';

export default function Preview ({ greetingData, setStatus, showCustomize }) {
  const [showShare, setShowShare] = useState(false);
  
  return (
    <div className="preview-container">
      <Ecard
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