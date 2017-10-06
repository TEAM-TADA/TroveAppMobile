import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, ActivityIndicator } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

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

class SignUp extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  componentDidUpdate() {
    const { navigation, signedIn } = this.props;

    if (signedIn) {
      navigation.goBack();
    }
  }

  render() {
    const { navigation, signingIn, signedIn, actions } = this.props;

    let emailInput = '';
    let pwInput = '';
    let nameInput = '';

    if (signingIn) {
      return (
        <View style={styles.container}>
          <ActivityIndicator animating={true} color={'#CDB287'} size={'large'} />
        </View>
      )
    } else if (signedIn) {
      return (
        <View style={styles.container}/>
      )
    } else {
      return (
        <View style={styles.container}>
          <Text style={styles.formtext}>
            Name
          </Text>
          <TextInput 
            style={styles.form}
            autoCorrect={false}
            keyboardType="default"
            onChangeText={(text) => {
              nameInput = text;
            }}
            underlineColorAndroid={'black'}
            keyboardAppearance='dark'
            returnKeyType={'next'}
            selectionColor="#CDB287"
          />
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
                actions.emailSignUp(nameInput, emailInput, pwInput);
              }}
              title="Sign Up"
            />
          </View>
        </View>
      )
    }
  }
}

const signUpState = (store) => {
  return {
    signingIn: store.Auth.signingIn,
    signedIn: store.Auth.authenticated,
  }
}

const signUpDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(signUpState, signUpDispatch)(SignUp);