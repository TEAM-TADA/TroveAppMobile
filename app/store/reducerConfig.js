import { combineReducers } from 'redux';

import Auth from '../reducers/authReducer';
import Nav from '../reducers/navReducer';
import Item from '../reducers/itemReducer';

const TroveReducer = combineReducers({
  Auth,
  Nav,
  Item,
});

export default TroveReducer;