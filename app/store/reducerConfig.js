import { combineReducers } from 'redux';

import Auth from '../reducers/authReducer';

const TroveReducer = combineReducers({
  Auth,
});

export default TroveReducer;