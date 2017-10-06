import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

import * as authActions from '../actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  form: {
    height: 40, 
    width: 200, 
    borderColor: 'black', 
    borderWidth: 1,
    backgroundColor: 'white'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    const { loggedIn, navigation } = this.props;

    if (loggedIn) {
      navigation.goBack();
    }
  }

  render() {
    const { navigation, actions, loggingIn, loggedIn } = this.props;

    let emailInput = '';
    let pwInput = '';

    if (loggingIn) {
      return (
        <View>
          <Text>
            Logging In..
          </Text>
        </View>
      )
    } else {
      return (
        <View>
          <Text>
            Email
          </Text>
          <TextInput 
            style={styles.form}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => {
              emailInput = text;
            }}
          />
          <Text>
            Password
          </Text>
          <TextInput 
            style={styles.form}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => {
              pwInput = text;
            }}
          />
          <Button 
            onPress={() => {
              actions.emailLogin(emailInput, pwInput);
            }}
            title="Log In"
          />
        </View>
      )
    }
  }
}

Login.navigationOptions = {
  title: 'Log In',
};

const mapPropsToState = (store) => {
  return {
    loggingIn: store.Auth.loggingIn,
    loggedIn: store.Auth.authenticated
  }
};

const mapActionsToState = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(mapPropsToState, mapActionsToState)(Login);