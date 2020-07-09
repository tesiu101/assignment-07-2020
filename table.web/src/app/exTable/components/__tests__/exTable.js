import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { ExTable } from '../Extable';

configure({ adapter: new Adapter() });

describe('Row tests => ', () => {
	it('renders', () => {
		shallow(<ExTable />);
	});
});
