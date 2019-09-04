import { AuthSession } from 'expo';
// import { CLIENT_ID, CLIENT_SECRET } from 'react-native-dotenv';

const CLIENT_ID = 'f9d99e0e7e1bc66deb13';
const CLIENT_SECRET = '7f59b7ea847a86b9857cbd7e0c78baf2f29abd4c';
const REDIRECT_URL = AuthSession.getRedirectUrl();

const githubFields = ['user', 'public_repo'];

const authUrlWithId = (id, fields) =>
  'https://github.com/login/oauth/authorize' +
  `?client_id=${id}` +
  `&redirect_uri=${encodeURIComponent(REDIRECT_URL)}` +
  `&scope=${encodeURIComponent(fields.join(' '))}`;

const createTokenWithCode = async (code, id, secret) => {
  const url =
    'https://github.com/login/oauth/access_token' +
    `?client_id=${id}` +
    `&client_secret=${secret}` +
    `&code=${code}`;
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    }
  });
  return res.json();
};

const githubAuthSession = async () => {
  try {
    const { type, params } = await AuthSession.startAsync({
      authUrl: authUrlWithId(CLIENT_ID, githubFields)
    });
    if (type !== 'success') {
      return type;
    }
    if (params.error && params.error === 'redirect_uri_mismatch') {
      console.log(
        `Please set the "Authorization callback URL" in your Github application settings to ${REDIRECT_URL}`
      );
    }
    const { access_token } = await createTokenWithCode(
      params.code,
      CLIENT_ID,
      CLIENT_SECRET
    );
    return access_token;
  } catch (error) {
    console.log(error);
  }
};
export default githubAuthSession;
