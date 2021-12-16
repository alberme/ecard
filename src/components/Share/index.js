import { useState } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineMail, MdOutlineLink } from 'react-icons/md';
import './styles.css';

export default function Share({ show, setShowShare, greetingData }) {
  const [shareMethod, setShareMethod] = useState(false);
  const [email, setEmail] = useState('');

  const sendEmail = (event) => {
    const { greeting, body, closing } = greetingData;
    event.preventDefault();
    
    let mailto = `mailto:${email}`;
    mailto += '?subject=E-Card';
    mailto += '&body=You have received an e-greeting card.';
    mailto += '%0D%0A%0D%0A';
    mailto += 'Go To Greeting Card';
    mailto += '%0D%0A';

    let url = 'https://luceroweb.github.io/ecard';
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    mailto += encodeURIComponent(url);

    window.open(mailto);
  }

  const renderShareMethod = () => {
    switch(shareMethod) {
      case 'email':
        return (
          <form className="form-share-email">
            <label htmlFor="email">Recipient Email</label>
            <div className="form-email-input">
              <input
                type="text"
                name="email"
                placeholder='Email'
                onChange={event => setEmail(event.target.value)} />
              <button onClick={sendEmail}>Send</button>
            </div>
          </form>
        );
      case 'link':
        return (
          <div><h2>Coming Soon</h2></div>
        )
      default:
        return (
          <div className="share-buttons">
            <MdOutlineMail className='icon' onClick={() => { setShareMethod('email') }} />
            <MdOutlineLink className='icon' onClick={() => { setShareMethod('link') }} />
          </div>
        );
    }
  }

  return show && (
    <div className="share-container">
      <div className="share-header">
        <h4>Share Your Greeting Card</h4>
        <IoMdCloseCircleOutline className='icon' onClick={() => setShowShare(false)} />
      </div>
      { renderShareMethod() }
    </div>
  )
}