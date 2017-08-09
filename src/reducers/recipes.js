import {
  ADD_RECIPE,
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
    default:
      return state;
  }
};

export default recipeList;
