import React from 'react';

export const Row = ({ rowData }) => {
  if(!rowData) return <tr><td colSpan='2'>no data</td></tr>

	return (
		<tr>
			<td>{rowData.name}</td>
			<td>{rowData.description}</td>
		</tr>
	);
};

export default Row;
