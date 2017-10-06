import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text, StatusBar, Navigator, Button } from 'react-native';

import * as authActions from '../actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: 'black'
  }
});

class MainView extends Component {
  static navigationOptions = {
    title: 'Trove'
  }

  render() {
    const { navigation, loggedIn, loggingOut, user, actions } = this.props;

    if (loggedIn) {
      return (
        <View style={styles.container}>
          <Text>Welcome, {user}!</Text>
          <Button
            onPress={() => {
              navigation.navigate('Men')
            }}
            title="Men"
          />
          <Button
            onPress={() => {
              actions.logout();
            }}
            title="Logout"
          />
        </View>
      )
    } else if (loggingOut) {
      return (
        <View>
          <Text>
            Logging Out..
          </Text>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text>Hello World! I'm the Mai</Text>
          <Button
            onPress={() => {
              navigation.navigate('Men')
            }}
            title="Men"
          />
          <Button
            onPress={() => {
              navigation.navigate('Login')
            }}
            title="Log In"
          />
        </View>
      )
    }
  }
}

const mainState = (store) => {
  return {
    loggedIn: store.Auth.authenticated,
    user: store.Auth.user,
    loggingOut: store.Auth.loggingOut,
  }
}

const mainDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(mainState, mainDispatch)(MainView);