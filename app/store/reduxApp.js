import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './storeConfig';
import { App } from '../navigator/appNavigator';

class ReduxApp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    )
  }
}

export default ReduxApp;