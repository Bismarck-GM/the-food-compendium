export const normalizeDataByMeal = (apidata, category) => {
  const { meals } = apidata;
  const response = { [category]: meals };
  return response;
};

export const normalizeDataRecipe = (apidata, recipeId) => {
  const newLocal = /[.]/g;
  const regex = newLocal;
  const { meals } = apidata;
  const response = { [recipeId]: meals[0] };
  response[recipeId].steppedInstructions = response[recipeId].strInstructions
    .replace(/\n/gs, '')
    .split(regex)
    .map((string, i) => {
      const nw = i + 1;
      return {
        instructionId: nw,
        instruction: string.trim(),
      };
    });
  const ingredientArray = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredientId = `strIngredient${i}`;
    const measureId = `strMeasure${i}`;
    const ingredient = response[recipeId][ingredientId];
    const measure = response[recipeId][measureId];
    if (ingredient === '' || measure === '') {
      break;
    }
    const ingredientItem = { id: i, ingredient, measure };
    ingredientArray.push(ingredientItem);
  }
  response[recipeId].ingredients = ingredientArray;
  return response;
};
