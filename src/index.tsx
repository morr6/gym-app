import React from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import { GlobalStyles } from './resources/GlobalStyles'

import { Provider } from 'react-redux'
// import store from './store/store'

ReactDOM.render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
      <App />
      <GlobalStyles />
    {/* </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);
