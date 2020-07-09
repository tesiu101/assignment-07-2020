import React, { useEffect } from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Table } from '../Table';

configure({ adapter: new Adapter() });

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useEffect: (f) => f(),
}));


describe('Row tests => ', () => {
  const exRow = { name: '', description: '' };
  const _3rows = [ exRow, exRow, exRow ];

	it('renders', () => {
		shallow(<Table />);
	});

	it('should render no data if no data is provided', () => {
		const container = shallow(<Table />);
		const innerText = container.text();
		expect(innerText).toBe('no data');
  });

  it('should render no data if no empty array is provided', () => {
		const container = shallow(<Table filteredValues={[]} />);
		const innerText = container.text();
		expect(innerText).toBe('no data');
	});

	it('should render rows when provided with data', () => {

		const container = shallow(<Table filteredValues={_3rows} />);
		const numberOfRows = container.find('Row').length;
		expect(numberOfRows).toBe(3);
  });

  it('should have connected input', () => {
		const container = shallow(<Table filteredValues={_3rows} />);
    const numberOfRows = container.find('Connect(Input)').length;
		expect(numberOfRows).toBe(1);
  });

  it('should fire filter with data', () => {
    const filterTable = jest.fn();
		const container = shallow(<Table filterTable={filterTable} data={_3rows} />);
		expect(filterTable).toBeCalledWith(_3rows);
  });
  
  it('should not break when invalid data', () => {
    shallow(<Table data={{}} />);
  });

});
