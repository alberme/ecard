import { useState, useEffect } from 'react';
import { IoMdCloseCircleOutline } from 'react-icons/io';
import { MdOutlineMail, MdOutlineLink } from 'react-icons/md';
import { generateShortLink } from '../../services/firebase.service';
import './styles.css';

export default function Share({ show, setShowShare, greetingData }) {
  const [shareMethod, setShareMethod] = useState('');
  const [email, setEmail] = useState('');
  const [shortLink, setShortLink] = useState('');
  const [shortLinkError, setShortLinkError] = useState(false);

  const createShareUrl = () => {
    const { greeting, body, closing } = greetingData;
    let url = 'https://alberme.github.io/ecard';
    url += `?greeting=${encodeURIComponent(greeting)}`;
    url += `&body=${encodeURIComponent(body)}`;
    url += `&closing=${encodeURIComponent(closing)}`;

    return url;
  }

  const sendEmail = (event) => {
    event.preventDefault();
    
    let mailto = `mailto:${email}`;
    mailto += '?subject=E-Card';
    mailto += '&body=You have received an e-greeting card.';
    mailto += '%0D%0A%0D%0A';
    mailto += 'Go To Greeting Card';
    mailto += '%0D%0A';

    let url = createShareUrl();

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
        return shortLink ? (
          <div className="form-share-email">
            <label htmlFor="link">Short Link</label>
            <div className="form-email-input">
              <input
                type="text"
                name="link"
                readOnly={true}
                value={shortLink}
              />
            </div>
          </div>
        ): ( 
          <h2>{!shortLinkError ? 'Loading...' : 'Error creating a short link'}</h2>
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

  useEffect(() => {
    if (shareMethod && !shortLink) {
      const shareUrl = createShareUrl();
      generateShortLink(shareUrl)
        .then(({ shortLink }) => {
          setShortLink(shortLink);
        })
        .catch(() => {
          setShortLinkError(true);
        });
    }
  }, [shareMethod, shortLink]);

  return show && (
    <div className="share-container">
      <div className="share-header">
        <h4>Share Your Greeting Card</h4>
        <IoMdCloseCircleOutline className='icon' onClick={() => {
          setShowShare(false);
          setShareMethod('');
          setShortLinkError(false);
        }}
        />
      </div>
      { renderShareMethod() }
    </div>
  )
}