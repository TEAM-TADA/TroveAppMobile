import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  textLeft: {
    color: '#CDB287',
    textAlignVertical: 'bottom'
  },
  textRight: {
    color: '#CDB287',
    textAlign: 'right'
  }
})

class Footer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text> </Text>
          <Text style={styles.textLeft}>
            © 2017 TROVE. All Right Reserved.
          </Text>
        </View>
        <View>
          <Text style={styles.textRight}>
            6060 Center Dr #950,
          </Text>
          <Text style={styles.textRight}>
            Los Angeles, CA 90045
          </Text>
        </View>
      </View>
    )
  }
}

export default Footer;