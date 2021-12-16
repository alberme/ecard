const FIREBASE_API_URL = `https://firebasedynamiclinks.googleapis.com/v1/shortLinks?key=${process.env.REACT_APP_FIREBASE_KEY}`
const domainUriPrefix = 'https://ecardr.page.link'

export async function generateShortLink(link) {
  let response = null;
  const data = {
    dynamicLinkInfo: {
      domainUriPrefix,
      link,
      socialMetaTagInfo: {
        socialTitle: 'E-Card App',
        socialDescription: 'You received an e-greeting card',
        // socialImageLink: 'string'
      }
    },
    suffix: {
      option: 'SHORT'
    },
  }

  try {
    response = await fetch(FIREBASE_API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    });
  } catch (error) {
    console.error('generateShortLink()\n', error);
  }
  return response.json();
}