import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from 'app/reducers';

export default function configure(initailState = {}) {
  
  // 
  const store = createStore(rootReducer, initailState, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f  
  ));
  
  return store;
}