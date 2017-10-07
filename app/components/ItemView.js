import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView, Image, Button, ToastAndroid } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
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
    textAlign: 'center',
    marginBottom: 10,
    fontWeight: 'bold'
  },
  owner: {
    marginTop: 10,
  },
  avail: {
    color: '#CDB287',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10
  },
  infoContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  sex: {
    marginRight: 5
  },
  size: {
    marginLeft: 5
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    fontSize: 40,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'gray',
    marginRight: 10
  },
  newPrice: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  tagContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: 350,
    justifyContent: 'space-between'
  },
  tag: {
    flex: 1
  },
  addBtn: {
    width: 300,
    alignContent: 'center',
    marginTop: 15,
    marginBottom: 15
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
            <Text style={styles.owner}>
              Owned by: {item.User.userName}
            </Text>
            <Text style={styles.avail}>
              {item.status === 'Available' ? 'Available!' : 'All Rented Out!'}
            </Text>
            <View style={styles.infoContainer}>
              <Text style={styles.oldPrice}>
                ${item.price}
              </Text>
              <Text style={styles.newPrice}>
                ${Math.floor(item.price * 0.07)}
              </Text>
            </View>
            <View style={styles.infoContainer}>
              <Text style={styles.sex}>
                Sex: {item.sex}
              </Text>
              <Text style={styles.size}>
                Size: {item.size}
              </Text>
            </View>
            <View style={styles.tagContainer}>
              {item.tag.map(t => {
                return <View key={t} ><Button title={t} color="gray" 
                onPress={() => {
                  ToastAndroid.showWithGravity('Filtering by tag: ' + t.toUpperCase(), ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                }}/></View>
              })}
            </View>
            <View style={styles.addBtn}>
              <Button title="Add to Cart" color="red" 
                onPress={() => {
                  ToastAndroid.showWithGravity('Item Added to Cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                }}/>
            </View>
          </View>
        </ScrollView>
        <ActionButton buttonColor="rgba(205, 178, 135, 1)" position="right">
          <ActionButton.Item buttonColor="rgba(205, 178, 135, 1)">
            <FontAwesome>{Icons.shoppingCart}</FontAwesome>
          </ActionButton.Item>
          <ActionButton.Item buttonColor="rgba(205, 178, 135, 1)">
            <FontAwesome>{Icons.userMd}</FontAwesome>
          </ActionButton.Item>
          <ActionButton.Item buttonColor="rgba(205, 178, 135, 1)">
            <FontAwesome>{Icons.arrowUp}</FontAwesome>
          </ActionButton.Item>
        </ActionButton>
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