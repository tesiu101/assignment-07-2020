import { createStore, applyMiddleware, compose } from 'redux';

import state from '../mainReducer';

const hasDevtoolsExtension = typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

let composeEnhancers;

if (hasDevtoolsExtension) {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
} else {
  composeEnhancers = compose;
}

let enhancer = composeEnhancers();

export default function configureStore(initialState) {
  const store = createStore(state, initialState, enhancer);

  // Hot reload reducers (requires Webpack or Browserify HMR to be enabled)
  if (module.hot) {
    module.hot.accept('../mainReducer', () => store.replaceReducer(require('../mainReducer') /*.default if you use Babel 6+ */));
  }

  return store;
}
