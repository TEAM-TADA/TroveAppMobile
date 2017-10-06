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
import * as authActions from '../actions/authActions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    overflow: 'scroll',
    flexDirection: 'column'
  },
  header: {
    color: '#CDB287',
    textAlign: 'center'
  }
});

const { width, height } = Dimensions.get('window');

class MainView extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    headerTitle: 'TROVE',
    headerTitleStyle: styles.header,
    headerStyle: {backgroundColor: 'black'},
  }
  
  componentWillUpdate() {
    const { loggingOut } = this.props;

    if (loggingOut) {
      ToastAndroid.showWithGravity('Logged Out', ToastAndroid.SHORT, ToastAndroid.BOTTOM);
    }

  }
  render() {
    const { navigation, loggedIn, user, actions } = this.props;

    return (
      <View style={styles.container}>
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
          <View>
            <Text>Hi</Text>
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
  }
}

const mainDispatch = (dispatch) => {
  return {
    actions: bindActionCreators(authActions, dispatch),
  }
}

export default connect(mainState, mainDispatch)(MainView);