import * as types from '../constants/ActionTypes';
import { getCurrentRecipe } from '../reducers/recipes';

export const openDeleteDialog = (currentRecipeId) => {
  return {
    type: types.OPEN_DELETE_DIALOG,
    payload: currentRecipeId,
  };
};

export const closeDeleteDialog = () => {
  return {
    type: types.CLOSE_DELETE_DIALOG,
  };
};

export const openEditDialog = (id) => (dispatch, getState) => {
  const currentRecipe = getCurrentRecipe(id, getState().recipes);
  console.log(currentRecipe);
  dispatch({
    type: types.OPEN_EDIT_DIALOG,
    payload: {
      id: id,
      name: currentRecipe.name,
      ingredients: currentRecipe.ingredients.join(', '),
    },
  });
};

export const closeEditDialog = () => {
  return {
    type: types.CLOSE_EDIT_DIALOG,
  };
};

export const openAddDialog = () => {
  return {
    type: types.OPEN_ADD_DIALOG,
  };
};

export const closeAddDialog = () => {
  return {
    type: types.CLOSE_ADD_DIALOG,
  };
};

export const openInfoDialog = () => {
  return {
    type: types.OPEN_INFO_DIALOG,
  };
};

export const closeInfoDialog = () => {
  return {
    type: types.CLOSE_INFO_DIALOG,
  };
};

export const inputRecipe = (name, id) => {
  return {
    type: types.INPUT_RECIPE,
    payload: {
      value: name,
      field: id,
    },
  };
};

export const addRecipe = (id, name, ingredients) => {
  return {
    type: types.ADD_RECIPE,
    payload: {
      id,
      name,
      ingredients,
    },
  };
};

export const deleteRecipe = () => (dispatch, getState) => {
  const currentRecipeId = getState().input.currentRecipeId;

  dispatch({
    type: types.DELETE_RECIPE,
    payload: currentRecipeId,
  });
};

export const updateRecipe = (name, ingredients) => (dispatch, getState) => {
  const currentRecipeId = getState().input.currentRecipeId;

  dispatch({
    type: types.UPDATE_RECIPE,
    payload: {
      currentRecipeId,
      name,
      ingredients,
    },
  });
};

export const showErrorMessage = (field, message) => {
  return {
    type: types.SHOW_ERROR,
    payload: {
      field,
      message,
    },
  };
};

export const hideErrorMessages = () => {
  return {
    type: types.HIDE_ERROR,
  };
};
