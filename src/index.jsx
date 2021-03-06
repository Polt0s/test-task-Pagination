import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducer/index.js';
import Main from './Components/Main.jsx';

render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('root'),
);
