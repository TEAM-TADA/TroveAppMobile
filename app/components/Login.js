import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, StyleSheet, Text, View, TextInput, ActivityIndicator, ToastAndroid } from 'react-native';

import * as authActions from '../actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: 'black',
  },
  formtext: {
    fontSize: 20,
    margin: 10,
    color: '#CDB287'
  },
  form: {
    height: 40, 
    width: 200,
    borderRadius: 5, 
    borderColor: '#CDB287', 
    borderWidth: 1,
    backgroundColor: 'black',
    color: '#CDB287',
    textDecorationColor: 'black',
  },
  btn: {
    marginTop: 20,
    width: 200,
    backgroundColor: '#CDB287',
    borderColor: '#CDB287'
  }
});

class Login extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  componentDidUpdate() {
    const { loggedIn, navigation, user } = this.props;

    if (loggedIn) {
      ToastAndroid.showWithGravity('Welcome back to TROVE, ' + user, ToastAndroid.SHORT, ToastAndroid.BOTTOM);
      navigation.goBack();
    }
  }

  render() {
    const { navigation, actions, loggingIn, loggedIn } = this.props;

    let emailInput = '';
    let pwInput = '';

    if (loggingIn) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} color={'#CDB287'} size={'large'} />
        </View>
      )
    } else if (loggedIn) {
      return (
        <View style={styles.container}/>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.formtext}>
            Email
          </Text>
          <TextInput 
            style={styles.form}
            autoCorrect={false}
            keyboardType="email-address"
            onChangeText={(text) => {
              emailInput = text;
            }}
            underlineColorAndroid={'black'}
            keyboardAppearance='dark'
            returnKeyType={'next'}
            selectionColor="#CDB287"
          />
          <Text style={styles.formtext}>
            Password
          </Text>
          <TextInput 
            style={styles.form}
            autoCorrect={false}
            secureTextEntry={true}
            onChangeText={(text) => {
              pwInput = text;
            }}
            underlineColorAndroid={'black'}
            keyboardAppearance='dark'
            returnKeyType='done'
            selectionColor="#CDB287"
          />
          <View style={styles.btn}>
            <Button
              color='#CDB287'
              onPress={() => {
                actions.emailLogin(emailInput, pwInput);
              }}
              title="Log In"
            />
          </View>
          <View style={styles.btn}>
            <Button 
              color='#CDB287'
              onPress={() => {
                navigation.navigate('Signup');
              }}
              title="Sign Up"
            />
          </View>
        </View>
      )
    }
  }
}

const mapPropsToState = (store) => {
  return {
    loggingIn: store.Auth.loggingIn,
    loggedIn: store.Auth.authenticated,
    user: store.Auth.user
  }
};

const mapActionsToState = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  };
};

export default connect(mapPropsToState, mapActionsToState)(Login);