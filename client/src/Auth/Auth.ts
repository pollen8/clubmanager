import auth0, {
  Auth0DecodedHash,
  Auth0UserProfile,
} from 'auth0-js';

export class Auth {

  auth0 = new auth0.WebAuth({
    domain: 'bhp.eu.auth0.com',
    clientID: 'kNgXEPRYCGsdlTlrZnPZGtK7GeDRgnbu',
    redirectUri: `${document.location!.origin}/callback`,
    audience: 'https://bhp.eu.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid profile'
  })

  authFlag: string = '';
  idToken: string | undefined = '';
  expiresAt = 0;
  userProfile: Auth0UserProfile | null = null;

  constructor() {
    this.authFlag = 'isLoggedIn';
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
    this.getProfile = this.getProfile.bind(this);
    this.silentAuth();
  }

  login() {
    this.auth0.authorize();
  }

  getAccessToken() {
    const accessToken = localStorage.getItem('access_token');
    if (!accessToken) {
      throw new Error('No Access Token found');
    }
    return accessToken;
  }

  getIdToken() {
    return this.idToken;
  }

  getProfile(cb: Function) {
    let accessToken = this.getAccessToken();
    this.auth0.client.userInfo(accessToken, (err, profile) => {
      if (profile) {
        this.userProfile = profile;
      }
      cb(err, profile);
    });
  }

  handleAuthentication() {
    return new Promise((resolve, reject) => {
      console.log('handleAuthentication');
      console.log(this.auth0);
      this.auth0.parseHash((err, authResult) => {
        console.log('res', err, authResult);
        if (err) return reject(err);
        if (!authResult || !authResult.idToken) {
          return reject(err);
        }
        console.log('authResult', authResult);
        this.setSession(authResult);
        resolve();
      });
    })
  }

  setSession(authResult: Auth0DecodedHash) {
    this.idToken = authResult.idToken;
    // set the time that the id token will expire at
    this.expiresAt = authResult.expiresIn
      ? authResult.expiresIn * 1000 + new Date().getTime()
      : 0;
      console.log('set Session', authResult);
    localStorage.setItem(this.authFlag, JSON.stringify(true));
    localStorage.setItem('access_token', String(authResult.accessToken));
  }

  logout() {
    localStorage.setItem(this.authFlag, JSON.stringify(false));
    localStorage.removeItem('access_token');
    this.auth0.logout({
      returnTo: 'http://localhost:3000',
      clientID: 'D1lahFIpV82Mum7TimXgG0WPxpP8suGo',
    });
  }

  silentAuth() {
    // if (this.isAuthenticated()) {
    return new Promise((resolve, reject) => {
      this.auth0.checkSession({}, (err, authResult) => {
        if (err) {
          localStorage.removeItem(this.authFlag);
          return reject(err);
        }
        this.setSession(authResult);
        resolve();
      });
    });
    // }
  }

  isAuthenticated() {
    // Check whether the current time is past the token's expiry time
    //return new Date().getTime() < this.expiresAt;
    return JSON.parse(String(localStorage.getItem(this.authFlag)));
  }
}

const auth = new Auth();

export default auth;