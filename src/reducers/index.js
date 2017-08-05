const init_state = {
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
    default:
      return state;
  }
};

export default recipeBoxApp;
