import { combineReducers } from 'redux';

import Auth from '../reducers/authReducer';
import Nav from '../reducers/navReducer';
import Item from '../reducers/itemReducer';
import Cart from '../reducers/cartReducer';

const TroveReducer = combineReducers({
  Auth,
  Nav,
  Item,
  Cart,
});

export default TroveReducer;