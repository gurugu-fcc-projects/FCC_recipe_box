import { combineReducers } from 'redux';

import dialogs from './dialogs';
import input from './input';
import recipes from './recipes';
import errors from './errors';

const rootReducer = combineReducers({
  dialogs,
  input,
  recipes,
  errors,
});

export default rootReducer;
