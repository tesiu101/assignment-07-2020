import configureStore from './configureStore';

var _store = null;

// For test purposes, if running in browser we create broserHistory store
// If running tests we do not need to create this kind of store as we only operate on redux instruments
if (typeof(window) !== 'undefined') {
	_store = configureStore();
}
else {
	_store = null;
}

export const store = _store;