import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator } from 'react-navigation';

export const AppNavigator = StackNavigator({
  Main: { screen: MainView },
  Login: { screen: LoginView },
});

const AppWithNavigationState = ({ dispatch, nav }) => (
  <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
);

const mapStateToProps = (store) => ({
  nav: store.Nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);