import update from 'immutability-helper';

import * as actions from './actions';

import { filterTable } from './utils';

export const initialState = {
	filteredValues: [],
	filterString: ''
};

const table = (state = initialState, action = { type: '' }) => {
	switch (action.type) {
		case actions.FILTER_TABLE: {
			const filteredValues = filterTable(action.data, state.filterString);

			return update(state, { filteredValues: { $set: filteredValues } });
		}

		case actions.CHANGE_FILTER_STRING: {
			return update(state, { filterString: { $set: action.filter } });
		}

		default:
			return state;
	}
};

export default table;
