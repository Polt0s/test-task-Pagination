import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer/index.js';
import App from './components/App.jsx';

localStorage.getItem('autosave');
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
