import React from 'react';
import { Provider } from 'react-redux';

import store from './storeConfig';
import AppWithNavigationState from '../navigator/appNavigator';

const ReduxApp = () => (
  <Provider store={store}>
    <AppWithNavigationState />
  </Provider>
)

export default ReduxApp;