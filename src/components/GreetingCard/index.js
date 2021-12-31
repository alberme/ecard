import snow from '../../images/tina.png';
import tina from '../../images/tina_inside.gif';
import { MdArrowBack, MdArrowForward } from 'react-icons/md';
import './styles.css';
import { useState } from 'react';

function GreetingCard({ greetingData }) {
  const { greeting, body, closing } = greetingData;
  const [cardClosed, setCardClosed] = useState(true);
  const [startCoord, setStartCoord] = useState(0);
  const [cardTranslateIndex, setCardTranslateIndex] = useState(1);
  const translateNames = ['translate-left', '', 'translate-right']
  
  const handleStartGesture = (event) => setStartCoord(event.changedTouches[0].screenX);

  const handleEndGesture = (event) => {
    if (cardClosed) return;
    
    const endCoord = event.changedTouches[0].screenX;
    let index = cardTranslateIndex;
    if (endCoord > startCoord) {
      index += 1;
    } else {
      index -= 1;
    }
    // limit index between 0 and 2;
    index = Math.min(Math.max(index, 0), 2);
    setCardTranslateIndex(index);
    setStartCoord(1);
  }

  return (
    <div className="greeting-card-container animate pop">
      <div
        className={`greeting-card ${cardClosed ? 'closed' : ''} ${translateNames[cardTranslateIndex]}`}
        onMouseEnter={() => setCardClosed(false)}
        onMouseLeave={() => setCardClosed(true)}
        onTouchStart={handleStartGesture}
        onTouchEnd={handleEndGesture}
      >
        <div className="greeting-card-cover">
          <div className="greeting-card-front">
            <img src={snow} alt="Avatar" />
          </div>
          <div className="greeting-card-back">
            <img src={tina} alt="Avatar" />
          </div>
        </div>
        <div className="greeting-card-right">
          <h1>{greeting}</h1>
          <p>{body}</p>
          <p>{closing}</p>
        </div>
      </div>
      <div className="greeting-card-instructions">
        {
          cardClosed ? (
            <h3>Tap To Open!</h3>
          ) : 
          (
            <>
              <MdArrowBack className='icon animate bounce left'/>
              <h3>Swipe To Move Card!</h3>
              <MdArrowForward className='icon animate bounce right'/>
            </>
          )
        }
        
      </div>
    </div>
  );
}

export default GreetingCard;
