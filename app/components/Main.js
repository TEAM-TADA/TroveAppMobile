import React, { Component } from 'react';
import { StyleSheet, View, Text, StatusBar, Navigator, Button } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  header: {
    color: 'black'
  }
});

class MainView extends Component {
  static navigationOptions = {
    title: 'Main'
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World! I'm the Mai</Text>
        <Button
          onPress={() => {
            this.props.navigation.navigate('Login')
          }}
          title="Log In"
        ></Button>
      </View>
    )
  }
}

const Header = () => (
  <Text style={styles.header}>TROVE</Text>
)

export default MainView;