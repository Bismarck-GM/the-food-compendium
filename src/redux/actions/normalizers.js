export const normalizeDataByMeal = (apidata, category) => {
  const { meals } = apidata;
  const response = { [category]: meals };
  return response;
};

export const normalizeDataRecipe = (apidata, recipeId) => {
  const { meals } = apidata;
  const response = { [recipeId]: meals[0] };
  return response;
};
