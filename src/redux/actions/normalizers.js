export const normalizeDataByMeal = (apidata, category) => {
  const { meals } = apidata;
  const response = { [category]: meals };
  return response;
};

export const normalizeDataRecipe = (apidata, recipeId) => {
  const newLocal = /[.]/g;
  const regex = newLocal;
  const { meals } = apidata;
  const response = { [recipeId]: {} };
  response[recipeId].steppedInstructions = meals[0].strInstructions
    .replace(/\n/gs, '')
    .split(regex)
    .map((string, i) => {
      const nw = i + 1;
      return {
        instructionId: nw,
        instruction: string.trim(),
        isDone: false,
      };
    });
  const ingredientArray = [];
  for (let i = 1; i <= 20; i += 1) {
    const ingredientId = `strIngredient${i}`;
    const measureId = `strMeasure${i}`;
    const ingredient = meals[0][ingredientId];
    let measure = meals[0][measureId];
    if (measure.length === 1 || measure.match(/^\d+$/g)) {
      measure = `${measure} units`;
    }
    if (ingredient === '' || measure === '') {
      break;
    }
    const ingredientItem = {
      id: i,
      ingredient,
      measure,
      isDone: false,
    };
    ingredientArray.push(ingredientItem);
  }
  response[recipeId].ingredients = ingredientArray;
  response[recipeId].dateModified = meals[0].dateModified;
  response[recipeId].idMeal = meals[0].idMeal;
  response[recipeId].strArea = meals[0].strArea;
  response[recipeId].strCategory = meals[0].strCategory;
  response[recipeId].strCreativeCommonsConfirmed = meals[0].strCreativeCommonsConfirmed;
  response[recipeId].strDrinkAlternate = meals[0].strDrinkAlternate;
  response[recipeId].strImageSource = meals[0].strImageSource;
  response[recipeId].strMeal = meals[0].strMeal;
  response[recipeId].strMealThumb = meals[0].strMealThumb;
  response[recipeId].strSource = meals[0].strSource;
  response[recipeId].strTags = meals[0].strTags;
  response[recipeId].strYoutube = meals[0].strYoutube;
  return response;
};
