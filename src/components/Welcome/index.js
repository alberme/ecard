import snow from '../../images/snow.jpg'
import './styles.css';

export default function Welcome({ setStatus }) {
  return (
    <div className="splash-container">
      <div className="splash-left">
        <div className="splash-left-headers">
          <h2>Create a Holiday Greeting Card!</h2>
          <h4>Share Your Greeting Card with Family and Friends!</h4>
        </div>
        <button onClick={() => setStatus('customize')}>Get Started</button>
      </div>
      <div className="splash-right animate pop">
        <img src={snow} alt="snow" />
      </div>
    </div>
  )
}