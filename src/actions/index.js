import * as types from '../constants/ActionTypes';

export const openDeleteDialog = () => {
  return {
    type: types.OPEN_DELETE_DIALOG,
  };
};

export const closeDeleteDialog = () => {
  return {
    type: types.CLOSE_DELETE_DIALOG,
  };
};

export const openEditDialog = () => {
  return {
    type: types.OPEN_EDIT_DIALOG,
  };
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

export const inputRecipe = (name, id) => {
  return {
    type: types.INPUT_RECIPE,
    payload: {
      value: name,
      field: id,
    },
  };
};
