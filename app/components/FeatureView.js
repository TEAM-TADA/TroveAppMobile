import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginTop: 25,
    marginBottom: 25
  },
  card: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    width: 300,
    backgroundColor: 'black'
  },
  cardLeft: {
    width: 200,
  },
  textBrand: {
    textAlign: 'center',
    fontSize: 30,
    color: '#CDB287',
    fontWeight: 'bold'
  },
  textName: {
    color: 'gray',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10
  },
  textPrice: {
    color: 'gray',
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center'
  }
})

class Featureview extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { item } = this.props;
    return (
      <View style={styles.container}>
        <Image source={{uri: item.image}} style={{width: 300, height: 300}} resizeMethod="resize" resizeMode="contain" />
        <View style={styles.card}>
          <Text style={styles.textBrand}>
            {item.brand}
          </Text>
          <Text style={styles.textName}>
            {item.itemname}
          </Text>
          <Text style={styles.textPrice}>
            ${Math.floor(item.price * 0.07)}
          </Text>
        </View>
      </View>
    )
  }
}

export default Featureview;