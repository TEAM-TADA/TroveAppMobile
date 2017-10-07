import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView, ToastAndroid, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as itemActions from '../actions/itemActions';
import * as cartActions from '../actions/cartActions';
import FeatureView from './FeatureView';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  viewContainer: {
    alignItems: 'center'
  },
  header: {
    backgroundColor: 'black',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center'
  },
  headerText: {
    color: '#CDB287',
    textAlign: 'right',
    fontSize: 35,
    fontWeight: 'bold',
    marginLeft: '23%'
  },
  headerPage: {
    color: '#CDB287',
    textAlign: 'center',
    width: 110,
    flexWrap: 'wrap',
    marginLeft: 10
  },
  headerColumn: {
    flexDirection: 'column'
  },
  btn: {
    marginBottom: 10
  }
})

class Cart extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { cart, user, actions, navigation, cartActions } = this.props;

    if (cart) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>
                TROVE
              </Text>
            </View>
            <View>
              <Text style={styles.headerPage}>
                {user}'s Cart
              </Text>
            </View>
          </View>
          <ScrollView>
            <View style={styles.viewContainer}>
              {cart.map(item => {
                return (
                  <View>
                    <FeatureView item={item} key={item.id + 'c'} navigation={navigation} {...actions} />
                    <View style={styles.btn}>
                      <Button title="Remove from Cart" color="red"
                        onPress={() => {
                          cartActions.removeFromCart(item);
                          ToastAndroid.showWithGravity('Item removed from cart', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
                        }}
                      />
                    </View>
                  </View>
                )
              })}
            </View>
          </ScrollView>
        </View>
      )
    } else if (cart.length === 0) {
      return (
        <View style={styles.container}>
          <View style={styles.header}>
            <View>
              <Text style={styles.headerText}>
                TROVE
              </Text>
            </View>
            <View>
              <Text style={styles.headerPage}>
                {user}'s Cart
              </Text>
            </View>
          </View>
          <View>
            <Text style={{color: 'black'}}>
              I'm Empty
            </Text>
          </View>
        </View>
      )
    }
  }
}

const cartState = (store) => {
  return {
    user: store.Auth.user,
    cart: store.Cart.cart
  }
};

const cartDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch),
    cartActions: bindActionCreators(cartActions, dispatch)
  }
}

export default connect(cartState, cartDispatch)(Cart);