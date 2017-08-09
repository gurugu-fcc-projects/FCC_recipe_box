import {
  SHOW_ERROR,
  HIDE_ERROR,
} from '../constants/ActionTypes';

const initial_state = {
  inputNameError: '',
  inputIngredientsError: '',
};

const errors = (state = initial_state, action) => {
  switch (action.type) {
    case SHOW_ERROR:
      return {
        ...state,
        [action.payload.field]: action.payload.message,
      };
    case HIDE_ERROR:
      return {
        inputNameError: '',
        inputIngredientsError: '',
      };
    default:
      return state;
  }
};

export default errors;
