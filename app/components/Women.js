import React, { Component } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import ActionButton from 'react-native-action-button';
import FontAwesome, { Icons } from 'react-native-fontawesome';

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
    const { items } = this.props;

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
              return item.sex === 'F' ? <FeatureView item={item} key={item.id + 'm'} /> : null;
            })}
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
};

const menState = (store) => {
  return {
    items: store.Item.items
  }
};

export default connect(menState)(Women);