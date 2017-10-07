import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
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
  }
})

class Women extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null,
  }

  render() {
    const { items, navigation, actions, loggedIn } = this.props;

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
              Women's Collection
            </Text>
          </View>
        </View>
        <ScrollView>
          <View style={styles.viewContainer}>
            {items.map(item => {
              return item.sex === 'F' ? <FeatureView item={item} key={item.id + 'f'} navigation={navigation} {...actions} /> : null;
            })}
          </View>
        </ScrollView>
        {loggedIn ? <ActionBtn navigation={navigation} /> : null}
      </View>
    )
  }
};

const womenState = (store) => {
  return {
    items: store.Item.items,
    loggedIn: store.Auth.authenticated
  }
};

const womenDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(itemActions, dispatch),
  }
}

export default connect(womenState, womenDispatch)(Women);