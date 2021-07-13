import React, { FC } from 'react';
import './App.css';

import MainRouter from '../page/router/MainRouter'

const App: FC = () => {
  return (
    <div className="App">
      <MainRouter />
    </div>
  );
}

export default App;
