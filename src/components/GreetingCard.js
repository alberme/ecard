import snow from '../images/snow.jpg';

function GreetingCard({ greeting, body, closing }) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={snow} className="App-logo" alt="snow" />
        <p>{greeting}</p>
        <p>{body}</p>
        <p>{closing}</p>
        <button
          className="App-link"
        >
          Reshare This Card
        </button>
      </header>
    </div>
  );
}

export default GreetingCard;
