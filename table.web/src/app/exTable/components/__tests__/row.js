import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Row } from '../Row';

configure({ adapter: new Adapter() });

describe('Row tests => ', () => {
	it('renders', () => {
		shallow(<Row />);
	});

	it('should render 1 table row', () => {
		const container = shallow(<Row />);
		const nrOfRows = container.find('tr').length;
		expect(nrOfRows).toBe(1);
	});

	it('should render no data if no data is provided', () => {
		const container = shallow(<Row />);
		const innerText = container.find('td').text();
		expect(innerText).toBe('no data');
	});

	it('should render data when provided', () => {
		const name = 'name';
		const description = 'description';
		const rowData = { name, description };
    const container = shallow(<Row rowData={rowData} />);
    const nameColumn = container.find('td').at(0).text();
		const descriptionColumn = container.find('td').at(1).text();
    expect(nameColumn).toBe(name);
    expect(descriptionColumn).toBe(description);
	});
});
