import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { connect } from 'react-redux';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white'
  },
  header: {
    backgroundColor: 'black',
    height: 50,
  },
  headerText: {
    color: '#CDB287',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold',
  },
  viewContainer: {
    alignItems: 'center',
    paddingLeft: 15,
    paddingRight: 15
  },
  itemName: {
    color: 'gray',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  brand: {
    color: '#CDB287',
    fontSize: 20,
    textAlign: 'center'
  }
})

class ItemView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const { item } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            TROVE
          </Text>
        </View>
        <ScrollView>
          <View style={styles.viewContainer}>
            <Text style={styles.itemName}>
              {item.itemname}
            </Text>
            <Text style={styles.brand}>
              {item.brand}
            </Text>
            <Image source={{uri: item.image}} style={{width: 300, height: 300}} resizeMethod="resize" resizeMode="contain" />

          </View>
        </ScrollView>
      </View>
    )
  }
}

const itemState = (store) => {
  return {
    item: store.Item.item,
  }
}

export default connect(itemState)(ItemView);