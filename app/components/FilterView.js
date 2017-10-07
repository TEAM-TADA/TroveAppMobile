import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import FeatureView from './FeatureView';
import ActionBtn from './ActionButton';
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
    const { items, filter, navigation, actions, loggedIn } = this.props;

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
        {loggedIn ? <ActionBtn navigation={navigation} /> : null}
      </View>
    )
  }
}

const filterState = (store) => {
  return {
    items: store.Item.items,
    filter: store.Item.filter,
    loggedIn: store.Auth.authenticated
  }
};

const filterDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch)
  }
};

export default connect(filterState, filterDispatch)(FilterView);