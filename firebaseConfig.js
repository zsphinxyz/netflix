import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyBqktb-1FnS38Yxh5wnm10jUl8ys3vREPQ',
  authDomain: 'zreact.firebaseapp.com',
  projectId: 'zreact',
  storageBucket: 'zreact.appspot.com',
  messagingSenderId: '21886633661',
  appId: '1:21886633661:web:ceb23c94fff1a7b7abd9d4',
  measurementId: 'G-EZN529D9E6',
};

export const app = initializeApp(firebaseConfig);
const key = process.env.REACT_APP_APIKEY;
console.log(key);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
