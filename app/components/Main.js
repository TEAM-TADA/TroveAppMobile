import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { StyleSheet, View, Text, StatusBar, Navigator, Button, ToastAndroid } from 'react-native';

import * as authActions from '../actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: "#CDB287"
  },
  leftBtn: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    width: 200,
  },
  viewBtn: {
    width: 100,
  },
  header: {
    color: '#CDB287',
    textAlign: 'center'
  }
});


class MainView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitle: 'TROVE',
    headerTitleStyle: styles.header,
    headerStyle: {backgroundColor: 'black'},
  }
  
  componentWillUpdate() {
    const { loggingOut } = this.props;

    if (loggingOut) {
      ToastAndroid.showWithGravity('Logged Out', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }

  }
  render() {
    const { navigation, loggedIn, user, actions } = this.props;

    if (loggedIn) {
      return (
        <View style={styles.container}>
          <View style={styles.navBar}>
            <View style={styles.leftBtn}>
              <View style={styles.viewBtn}>
                <Button
                  color="#CDB287"
                  onPress={() => {
                    navigation.navigate('Men')
                  }}
                  title="Men"
                />
              </View>
              <View style={styles.viewBtn}>
                <Button
                  color="#CDB287"
                  onPress={() => {
                    navigation.navigate('Women')
                  }}
                  title="Women"
                />
              </View>
            </View>
            <Button
              color="#CDB287"
              onPress={() => {
                actions.logout();
              }}
              title="Logout"
            />
          </View>
        </View>
      )
    } else {
      return (
        <View style={styles.container}>
          <View style={styles.navBar}>
            <View style={styles.leftBtn}>
              <View style={styles.viewBtn}>
                <Button
                  color="#CDB287"
                  onPress={() => {
                    navigation.navigate('Men')
                  }}
                  title="Men"
                />
              </View>
              <View style={styles.viewBtn}>
                <Button
                  color="#CDB287"
                  onPress={() => {
                    navigation.navigate('Women')
                  }}
                  title="Women"
                />
              </View>
            </View>
            <Button
              color="#CDB287"
              onPress={() => {
                navigation.navigate('Login');
              }}
              title="Log In"
            />
          </View>
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