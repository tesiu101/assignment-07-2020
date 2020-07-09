import { createStore, applyMiddleware, compose } from 'redux';
import tableApp from '../mainReducer';

const hasDevtoolsExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

let composeEnhancers;

if (hasDevtoolsExtension) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
} else {
  composeEnhancers = compose;
}

const enhancer = composeEnhancers();

export default function configureStore(initialState) {
  const store = createStore(tableApp, initialState, enhancer);

  if (module.hot) {
    module.hot.accept('../mainReducer', () => store.replaceReducer(require('../mainReducer')));
  }

  return store;
}
