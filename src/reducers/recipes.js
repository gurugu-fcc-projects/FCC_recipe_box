const initial_state = [
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
];

const recipeList = (state = initial_state, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default recipeList;
