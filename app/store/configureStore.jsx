import {
  createStore,
  compose
} from 'redux';

import rootReducer from 'app/reducers';

export default function configure(initailState = {}) {
  
  // 
  const store = createStore(rootReducer, initailState, compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f  
  ));
  
  return store;
}