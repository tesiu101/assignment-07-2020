import { containsString } from '../utils';

describe('Utils tests => ', () => {
	const __filterEmpty = '';
  const __filterTest = 'test';
  const __filterTestU = 'TEST';
  const __filterTestWithSpace = 'some some';

  const __elemEmty = '';
  const __elemTestSubstring = 'someTestsome';
  const __elemTestWithSpace = '13123some some123';


	it('Should pass when empty filter', () => {
    const cointains = containsString(__filterEmpty, __elemTestSubstring);
    expect(cointains).toBeTruthy();
  });

  it('Should pass when filter the same', () => {
    const cointains = containsString(__filterTest, __filterTest);
    expect(cointains).toBeTruthy();
  });

  it('Should pass when filter is a substring', () => {
    const cointains = containsString(__filterTest, __elemTestSubstring);
    expect(cointains).toBeTruthy();
  });

  it('Should pass when filter is the same but different case', () => {
    const cointains = containsString(__filterTest, __filterTestU);
    expect(cointains).toBeTruthy();
  });

  it('Should pass when filter with space', () => {
    const cointains = containsString(__filterTestWithSpace, __elemTestWithSpace);
    expect(cointains).toBeTruthy();
  });

  it('Should pass when filter with space', () => {
    const cointains = containsString(__filterTest, __elemEmty);
    expect(cointains).toBeFalsy();
	});
});
