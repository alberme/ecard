import snow from '../../images/tina.png';
import './styles.css';

function GreetingCard({ greetingData }) {
  const { greeting, body, closing } = greetingData;
  return (
    <div className="greeting-card-container">
      <div className="greeting-card">
        <div className="greeting-card-cover">
          <img src={snow} alt="snow" />
        </div>
        <div className="greeting-card-inside">
          <p>{greeting}</p>
          <p>{body}</p>
          <p>{closing}</p>
        </div> 
      </div>
    </div>
  );
}

export default GreetingCard;
