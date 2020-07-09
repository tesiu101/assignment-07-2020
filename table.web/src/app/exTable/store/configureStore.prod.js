import { createStore } from 'redux';
import exTable from '../mainReducer';

export default function configureStore(initialState) {
	return createStore(exTable, initialState);
};
