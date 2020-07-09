import { createStore, applyMiddleware } from 'redux';
import tableApp from '../mainReducer';

export default function configureStore(initialState) {
	return createStore(tableApp, initialState);;
};
