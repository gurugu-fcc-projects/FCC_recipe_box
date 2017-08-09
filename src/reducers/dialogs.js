import {
  OPEN_DELETE_DIALOG,
  CLOSE_DELETE_DIALOG,
  OPEN_EDIT_DIALOG,
  CLOSE_EDIT_DIALOG,
  OPEN_ADD_DIALOG,
  CLOSE_ADD_DIALOG,
  ADD_RECIPE,
} from '../constants/ActionTypes';

const init_state = {
  deleteDialogIsOpen: false,
  editDialogIsOpen: false,
  addDialogIsOpen: false,
};

const dialogs = (state = init_state, action) => {
  switch(action.type) {
    case OPEN_DELETE_DIALOG:
      return {
        ...state,
        deleteDialogIsOpen: true,
      };
    case CLOSE_DELETE_DIALOG:
      return {
        ...state,
        deleteDialogIsOpen: false,
      };
    case OPEN_EDIT_DIALOG:
      return {
        ...state,
        editDialogIsOpen: true,
      };
    case CLOSE_EDIT_DIALOG:
      return {
        ...state,
        editDialogIsOpen: false,
      };
    case OPEN_ADD_DIALOG:
      return {
        ...state,
        addDialogIsOpen: true,
      };
    case CLOSE_ADD_DIALOG:
      return {
        ...state,
        addDialogIsOpen: false,
      };
    case ADD_RECIPE:
      return {
        ...state,
        addDialogIsOpen: false,
      }
    default:
      return state;
  }
};

export default dialogs;
