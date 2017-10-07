import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Carousel from 'react-native-looped-carousel';
import { 
  StyleSheet, View, Text, 
  StatusBar, Navigator, Button, 
  ToastAndroid, Dimensions, Image,
  ScrollView
} from 'react-native';

import Navbar from './NavBar';
import FeatView from './FeatureView';
import Footer from './Footer';
import * as authActions from '../actions/authActions';
import * as itemActions from '../actions/itemActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    overflow: 'scroll',
    flexDirection: 'column'
  },
  header: {
    backgroundColor: 'black',
    height: 50,
  },
  headerText: {
    color: '#CDB287',
    textAlign: 'center',
    fontSize: 35,
    fontWeight: 'bold'
  },
  feature: {
    backgroundColor: 'white',
    alignItems: 'center',
    flexDirection: 'column'
  },
  featText: {
    color: '#4A4A4A',
    textAlign: 'center',
    marginTop: 25,
    fontSize: 35,
    fontWeight: 'bold'
  },
});

const { width, height } = Dimensions.get('window');

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    const { fetched, itemActions } = this.props;

    if (!fetched) {
      itemActions.fetchItems();
    }
  }
  
  componentWillUpdate() {
    const { loggingOut } = this.props;

    if (loggingOut) {
      ToastAndroid.showWithGravity('Logged Out', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }

  }
  render() {
    const { navigation, loggedIn, user, actions, items } = this.props;

    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerText}>
            TROVE
          </Text>
        </View>
        {loggedIn ? <Navbar navigation={navigation} authenticated={true} {...actions} /> : <Navbar navigation={navigation} authenticated={false} {...actions} />}
        <ScrollView>
          <Carousel
            delay={5000}
            style={{width, height}}
            autoplay
          >
            <Image source={require('../imgs/carousel/2985afe0d520da810af488ba21959b78.jpg')} 
              resizeMode="contain"
              resizeMethod="resize" 
            />
            <Image source={require('../imgs/carousel/977af9d838b7226246678ecc3e7e4bbb.jpg')} resizeMethod="resize" resizeMode="contain" />
            <Image source={require('../imgs/carousel/ac6d8673dc47abc2722510c565a13524.jpg')} resizeMethod="resize" resizeMode="contain" />
            <Image source={require('../imgs/carousel/bb5ea3a7615f51e32ceb52d605e708ab.jpg')} resizeMethod="resize" resizeMode="contain" />
          </Carousel>
          <View style={styles.feature}>
            <Text style={styles.featText}>
              FEATURED
            </Text>
            <View>
              {items.map(item => {
                return item.id % 5 === 0 ? <FeatView item={item} key={item.id} /> : null;
              })}
            </View>
          </View>
          <View>
            <Footer />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const mainState = (store) => {
  return {
    loggedIn: store.Auth.authenticated,
    user: store.Auth.user,
    loggingOut: store.Auth.loggingOut,
    fetched: store.Item.fetched,
    items: store.Item.items
  }
}

const mainDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
    itemActions: bindActionCreators(itemActions, dispatch),
  }
}

export default connect(mainState, mainDispatch)(MainView);