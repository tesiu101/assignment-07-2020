import React, { useEffect } from 'react';

import shortid from 'shortid';
import Input from './Input';
import Row from './Row';

import cennectTable from '../connect/table/connect';

export const Table = ({ filterString, filterTable, filteredValues, ...props }) => {
	useEffect(
		() => {
			if (filterTable && typeof filterTable === 'function') filterTable(props.data);
		},
		[ filterString ]
	);

	const _hasNoData = hasNoData();

	return (
		<React.Fragment>
			<Input {...props} />
			{_hasNoData ? (
				<div className='empty-table'>no data</div>
			) : (
				<table className='table'>
          <thead><tr><td><strong>name</strong></td><td><strong>description</strong></td></tr></thead>
					<tbody>{filteredValues.map((rowData) => <Row rowData={rowData} key={shortid.generate()} />)}</tbody>
				</table>
			)}
		</React.Fragment>
	);

	function hasNoData() {
		return !filteredValues || filteredValues.length === 0;
	}
};

export default cennectTable(Table);
