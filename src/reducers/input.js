import {
  OPEN_DELETE_DIALOG,
  INPUT_RECIPE,
  ADD_RECIPE,
} from '../constants/ActionTypes';

const init_state = {
  dialogRecipeName: '',
  dialogIngredients: '',
  currentRecipe: '',
};

const inputRecipe = (state = init_state, action) => {
  switch(action.type) {
    case OPEN_DELETE_DIALOG:
      return {
        ...state,
        currentRecipe: action.payload,
      };
    case INPUT_RECIPE:
      return {
        ...state,
        [action.payload.field]: action.payload.value,
      };
    case ADD_RECIPE:
      return {
        dialogRecipeName: '',
        dialogIngredients: '',
      }
    default:
      return state;
  }
};

export default inputRecipe;
