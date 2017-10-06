import React, { Component } from 'react';
import { Button, StyleSheet, Text, View, TextInput } from 'react-native';

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
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    let emailInput = '';
    let pwInput = '';
    
    return (
      <View>
        <Text>
          Email
        </Text>
      </View>

    )
  }
}

Login.navigationOptions = {
  title: 'Log In',
};

export default Login;