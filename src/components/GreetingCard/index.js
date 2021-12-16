import snow from '../../images/snow.jpg';
import './styles.css';

function GreetingCard({ greetingData }) {
  const { greeting, body, closing } = greetingData;
  return (
    <div className="greeting-card-container">
      <img src={snow} className="App-logo" alt="snow" />
      <p>{greeting}</p>
      <p>{body}</p>
      <p>{closing}</p>
    </div>
  );
}

export default GreetingCard;
