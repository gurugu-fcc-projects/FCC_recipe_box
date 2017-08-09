import {
  ADD_RECIPE,
  DELETE_RECIPE,
  UPDATE_RECIPE,
} from '../constants/ActionTypes';

const initial_state = [
  {
    id: '1',
    name: 'Fruit Pie',
    ingredients: ['flour', 'salt', 'sugar', 'fruits'],
  },
  {
    id: '2',
    name: 'Steamed Veggies',
    ingredients: ['salt', 'water', 'cucumbers', 'tomatoes'],
  },
  {
    id: '3',
    name: 'Mashed Potatoes',
    ingredients: ['salt', 'water', 'butter', 'potatoes'],
  },
];

const recipeList = (state = initial_state, action) => {
  switch (action.type) {
    case ADD_RECIPE:
      return [
        ...state,
        {
          id: action.payload.id,
          name: action.payload.name,
          ingredients: action.payload.ingredients,
        }
      ];
    case DELETE_RECIPE:
      return state.filter((recipe) => {
        return recipe.id !== action.payload;
      });
    case UPDATE_RECIPE:
      return state.map((recipe) => {
        if (recipe.id === action.payload.currentRecipeId) {
          return {
            ...recipe,
            name: action.payload.name,
            ingredients: action.payload.ingredients,
          };
        }
        return recipe;
      });
    default:
      return state;
  }
};

export const getCurrentRecipe = (id, recipes) => {
  return recipes.filter((recipe) => {
    return recipe.id === id;
  })[0];
};

export default recipeList;
