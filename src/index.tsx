import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './app/App';
import GlobalStyles from './resources/GlobalStyles';

// import { Provider } from 'react-redux';
// import store from './store/store'

ReactDOM.render(
    <StrictMode>
        {/* <Provider store={store}> */}
        <App />
        <GlobalStyles />
        {/* </Provider> */}
    </StrictMode>,
    // eslint-disable-next-line no-undef
    window.document.getElementById('root'),
);
