import {
  OPEN_DELETE_DIALOG,
  OPEN_EDIT_DIALOG,
  INPUT_RECIPE,
  ADD_RECIPE,
} from '../constants/ActionTypes';

const init_state = {
  currentRecipeId: '',
  dialogRecipeName: '',
  dialogIngredients: '',
};

const inputRecipe = (state = init_state, action) => {
  switch(action.type) {
    case OPEN_DELETE_DIALOG:
      return {
        ...state,
        currentRecipeId: action.payload,
      };
    case OPEN_EDIT_DIALOG:
      return {
        currentRecipeId: action.payload.id,
        dialogRecipeName: action.payload.name,
        dialogIngredients: action.payload.ingredients,
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
