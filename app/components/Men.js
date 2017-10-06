import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  }
})

class Men extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    return (
      <View style={styles.container}>
      </View>
    )
  }
}

export default Men;