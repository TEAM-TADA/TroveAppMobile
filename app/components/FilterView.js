import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

import FeatureView from './FeatureView';
import * as itemActions from '../actions/itemActions';

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
    marginLeft: '20%'
  },
  headerPage: {
    color: '#CDB287',
    textAlign: 'left',
    marginLeft: 10
  },
  headerColumn: {
    flexDirection: 'column'
  },
})

class FilterView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  }

  render() {
    const { items, filter, navigation, actions } = this.props;

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
              Filtered by: {filter.toUpperCase()}
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.viewContainer}>
            {items.map(item => {
              return item.tag.includes(filter) ? <FeatureView item={item} key={item.id + 'fi'} navigation={navigation} {...actions} /> : null;
            })}
          </View>
        </ScrollView>
        <ActionButton buttonColor="rgba(205, 178, 135, 1)" position="right">
          <ActionButton.Item buttonColor="rgba(205, 178, 135, 1)"
            onPress={() => {
              navigation.navigate('Cart')
          }}>
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

const filterState = (store) => {
  return {
    items: store.Item.items,
    filter: store.Item.filter
  }
};

const filterDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(filterState, filterDispatch)(FilterView);