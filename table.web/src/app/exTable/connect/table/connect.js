import { connect } from 'react-redux';

import * as actions from './actions';

function mapStateToProps(state) {
	return { filteredValues: state.table.filteredValues, filterString: state.table.filterString };
}

function mapDispatchToProps(dispatch) {
	return {
		changeFilterString: (filter) => {
			dispatch(actions.change_filter_string(filter));
		},

		filterTable: (data) => {
			dispatch(actions.filter_table(data));
		}
	};
}

const cennectTable = connect(mapStateToProps, mapDispatchToProps);
export default cennectTable;
