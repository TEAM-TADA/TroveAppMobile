import { combineReducers } from 'redux';

import Auth from '../reducers/authReducer';
import Nav from '../reducers/navReducer';

const TroveReducer = combineReducers({
  Auth,
  Nav,
});

export default TroveReducer;