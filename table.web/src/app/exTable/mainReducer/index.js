import { combineReducers } from 'redux';

import table from '../connect/table/reducer';

const appCombine = combineReducers({
  table,
});

const appReducer = (state, action) => {
  return appCombine(state, action);
};

export default appReducer;
