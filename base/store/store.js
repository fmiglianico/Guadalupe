import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducer/rootReducer';

// Enhance store to debug with react devtools
const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// create a store with middlewares
const createStoreWithMiddleware = storeEnhancers(applyMiddleware(
  thunk
))(createStore);

export default createStoreWithMiddleware(rootReducer);