import tableReducer, { initialState } from '../reducer';
import { change_filter_string, filter_table } from '../actions';

describe('Reducer tests => ', () => {
	const __filterEmpty = '';
  const __filterSomething = 'something';
  const __filterAbc = 'aBc';

	const _listEmem1 = { name: 'Abc', description: 'something' };
	const _listEmem2 = { name: '123', description: 'SOMETHING' };
	const _listEmem3 = { name: 'abc', description: 'SoMeT1111' };
  const _listEmem4 = { name: 'abc123*', description: '' };
  const _listEmem5 = { name: 'something', description: '' };
	const __exampleList = [ _listEmem1, _listEmem2, _listEmem3, _listEmem4, _listEmem5 ];

	describe('Basics ', () => {
		it('Should be initialized with proper values', () => {
			expect(initialState).toEqual({
				filteredValues: [],
				filterString: ''
			});
		});

		it('Should do initial setup', () => {
			const reducerState = tableReducer(initialState, filter_table(__exampleList));
			expect(reducerState.filteredValues).toEqual(__exampleList);
		});
  });

  describe('Input changes ', () => {
    it('Should update filter', () => {
      const reducerState = tableReducer(initialState, change_filter_string(__filterSomething));
      expect(reducerState.filterString).toEqual(__filterSomething);
    });

    it('Should update to able to crear', () => {
      let reducerState = tableReducer(initialState, change_filter_string(__filterSomething));
      reducerState = tableReducer(reducerState, change_filter_string(__filterEmpty));
      expect(reducerState.filterString).toEqual(__filterEmpty);
    });
  });

  describe('Filtering ', () => {
    it('Should find element with matching name', () => {
      let reducerState = tableReducer(initialState, change_filter_string(__filterSomething));
      reducerState = tableReducer(reducerState, filter_table(__exampleList));
      expect(reducerState.filteredValues).toContain(_listEmem1);
    });

    it('Should find element with matching description', () => {
      let reducerState = tableReducer(initialState, change_filter_string(__filterSomething));
      reducerState = tableReducer(reducerState, filter_table(__exampleList));
      expect(reducerState.filteredValues).toContain(_listEmem5);
    });

    it('Should find element even when case is mismatched', () => {
      let reducerState = tableReducer(initialState, change_filter_string(__filterAbc));
      reducerState = tableReducer(reducerState, filter_table(__exampleList));
      expect(reducerState.filteredValues).toContain(_listEmem1);
      expect(reducerState.filteredValues).toContain(_listEmem3);
      expect(reducerState.filteredValues).toContain(_listEmem4);
    });

    it('Should not find elements that dont match', () => {
      let reducerState = tableReducer(initialState, change_filter_string(__filterAbc));
      reducerState = tableReducer(reducerState, filter_table(__exampleList));
      expect(reducerState.filteredValues).not.toContain(_listEmem2);
      expect(reducerState.filteredValues).not.toContain(_listEmem5);
    });
  });
});
