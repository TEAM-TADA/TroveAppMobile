import React, { Component } from 'react';
import { BackHandler } from 'react-native';
import { connect } from 'react-redux';
import { addNavigationHelpers, StackNavigator, NavigationActions } from 'react-navigation';

import MainView from '../components/Main';
import LoginView from '../components/Login';

export const AppNavigator = StackNavigator(
  {
    Main: { 
      screen: MainView,
    },
    Login: { 
      screen: LoginView,
    },
  },
  {
    headerMode: 'screen',
  }
);

class AppWithNavigationState extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackHandler.addEventListener("hardwareBackPress", this.onBackPress.bind(this));
  }

  componentWillUnmount() {
    BackHandler.removeEventListener("hardwareBackPress", this.onBackPress.bind(this));
  }

  onBackPress() {
    const { dispatch, nav } = this.props;

    if (nav.index === 0) {
      return false;
    }

    dispatch(NavigationActions.back());
    return true;
  }

  render() {
    const { dispatch, nav } = this.props;

    return <AppNavigator navigation={addNavigationHelpers({ dispatch, state: nav })} />
  }
}

const mapStateToProps = (state) => ({
  nav: state.Nav,
});

export const App = connect(mapStateToProps)(AppWithNavigationState);