import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

import TroveReducers from './reducerConfig';

const middleware = applyMiddleware(promise(), thunk);

const store = createStore(TroveReducers, middleware);

export default store;