import React from 'react';
import cennectTable from '../connect/table/connect';

export const Input = ({ changeFilterString, searchString }) => {
  return <input value={searchString} placeholder='enter search text' onChange={e => changeFilterString(e.target.value)} />;
};

export default cennectTable(Input);
