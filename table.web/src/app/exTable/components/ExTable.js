import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/createStore';
import ExTableWithoutRedux from './Table';

export const ExTable = (props) => {
	return (
		<Provider store={store}>
			<ExTableWithoutRedux {...props} />
		</Provider>
	);
};

export default ExTable;
