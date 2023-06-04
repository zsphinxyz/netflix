import * as React from 'react';
import './style.css';

import Form from './Form';
import Db from './Db';

export default function App() {
  return (
    <div className="app">
      <Form />
      <Db />
    </div>
  );
}
