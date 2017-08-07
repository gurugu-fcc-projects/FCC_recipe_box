import { combineReducers } from 'redux';

import dialogs from './dialogs';
import input from './input';
import recipes from './recipes';

const rootReducer = combineReducers({
  dialogs: dialogs,
  input: input,
  recipes: recipes,
});

export default rootReducer;
