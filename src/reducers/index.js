const init_state = {
  presetRecipes: [
    {
      name: 'Fruit Pie',
    },
    {
      name: 'Steamed Veggies',
    },
    {
      name: 'Mashed Potatoes',
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
