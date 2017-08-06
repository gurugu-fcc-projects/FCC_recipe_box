import * as types from '../constants/ActionTypes';

const init_state = {
  deleteWindowIsOpen: false,
  editWindowIsOpen: false,
  addWindowIsOpen: false,
  recipes: [
    {
      name: 'Fruit Pie',
      ingredients: ['flour', 'salt', 'sugar', 'fruits'],
    },
    {
      name: 'Steamed Veggies',
      ingredients: ['salt', 'water', 'cucumbers', 'tomatoes'],
    },
    {
      name: 'Mashed Potatoes',
      ingredients: ['salt', 'water', 'butter', 'potatoes'],
    },
  ],
};

const recipeBoxApp = (state = init_state, action) => {
  switch(action.type) {
    case types.OPEN_DELETE_WINDOW:
      return {
        ...state,
        deleteWindowIsOpen: true,
      };
    case types.CLOSE_DELETE_WINDOW:
      return {
        ...state,
        deleteWindowIsOpen: false,
      };
    case types.OPEN_EDIT_WINDOW:
      return {
        ...state,
        editWindowIsOpen: true,
      };
    case types.CLOSE_EDIT_WINDOW:
      return {
        ...state,
        editWindowIsOpen: false,
      };
    case types.OPEN_ADD_WINDOW:
      return {
        ...state,
        addWindowIsOpen: true,
      };
    case types.CLOSE_ADD_WINDOW:
      return {
        ...state,
        addWindowIsOpen: false,
      };
    default:
      return state;
  }
};

export default recipeBoxApp;
