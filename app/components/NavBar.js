import React, { Component } from 'react';
import { Button, View, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
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
});

class Navbar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { authenticated, navigation, logout } = this.props;

    if (authenticated) {
      return (
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
              logout();
            }}
            title="Logout"
          />
        </View>
      )
    } else {
      return (
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
      )
    }
  }
}

export default Navbar;