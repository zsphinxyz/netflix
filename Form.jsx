import { useState } from 'react';
import { auth, googleProvider } from './firebaseConfig';
import {
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from 'firebase/auth';

export default function Form() {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  console.log(auth?.currentUser?.email);

  const signIn = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, pwd);
      console.log('SUCCESSFULLY SIGN IN ');
    } catch (err) {
      console.error(err);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (err) {
      console.error(err);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form">
      <input
        type="text"
        placeholder="Email..."
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br /> <br />
      <input
        type="password"
        placeholder="Password..."
        onChange={(e) => {
          setPwd(e.target.value);
        }}
      />
      <br /> <br />
      <button onClick={signIn}>Sign In</button>
      <br /> <br />
      <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      <br /> <br />
      <button onClick={logout}>Log out</button>
    </div>
  );
}
