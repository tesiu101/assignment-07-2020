import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';

import { Input } from '../Input';

configure({ adapter: new Adapter() });

describe('Input tests => ', () => {
	it('renders', () => {
		shallow(<Input />);
	});

	it('should set value to be searchString', () => {
		const value = 'searchValue';
		const container = shallow(<Input searchString={value} />);
		const inputValue = container.find('input').props().value;
		expect(inputValue).toBe(value);
	});

	it('should call changeFilterString on change of input', () => {
		const value = 'searchValue';
		const newValue = 'new Value';
		const event = { target: { value: newValue } };
		const changeFilterString = jest.fn();

		const container = shallow(<Input searchString={value} changeFilterString={changeFilterString} />);
		container.find('input').simulate('change', event);
		expect(changeFilterString).toBeCalledWith(newValue);
	});
});
