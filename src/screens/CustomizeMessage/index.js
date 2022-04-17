import { useState } from "react";
import "./styles.css";
import snow from '../../images/snow.jpg';

export default function CustomizeMessage({ setGreetingData, greetingData, setStatus }) {
  const { greeting, body, closing } = greetingData;
  const [formData, setFormData] = useState({ 
    greeting,
    body,
    closing,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setGreetingData({ ...formData });
    setStatus('preview');
  }

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  }

  return (
    <div className="customize-message-container">
      <div className="customize-message-header">
        <img src={snow} alt="snow"/>
        <h4>How to reshare: Write your own custom message below!</h4>
      </div>
      <form className="form-container">

          <div className="input-fields-container">
            <input
              placeholder="Greeting"
              type="text"
              name="greeting"
              value={formData.greeting}
              onChange={handleInputChange}
            />
            <textarea
              placeholder="Body"
              name="body"
              id="input-field-body"
              cols="30"
              rows="10"
              value={formData.body}
              onChange={handleInputChange}
            >
            </textarea>
            <input
              placeholder="Closing"
              type="text"
              name="closing"
              value={formData.closing}
              onChange={handleInputChange}
            />
          </div>
        
        <button
          onClick={handleSubmit}
        >
          Preview
        </button>
      </form>
    </div>
  )
}