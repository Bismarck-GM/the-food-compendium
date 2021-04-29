const ALLCATEGORIESURL = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const SIMPLECATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const RANDOMMEAL = 'www.themealdb.com/api/json/v1/1/random.php';
const ALLINGREDIENTSURL = 'https://www.themealdb.com/api/json/v1/1/list.php?i=list';

const singleRecipeURL = (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const mealByCategoryURL = (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

export {
  ALLCATEGORIESURL,
  SIMPLECATEGORIES,
  RANDOMMEAL,
  singleRecipeURL,
  mealByCategoryURL,
  ALLINGREDIENTSURL,
};
