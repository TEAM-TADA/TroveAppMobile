import React from 'react';
import { Provider } from 'react-redux';

import store from './storeConfig';
import App from '../components/App';

const ReduxApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
)

export default ReduxApp;