const ALLCATEGORIES = 'https://www.themealdb.com/api/json/v1/1/categories.php';
const SIMPLECATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const RANDOMMEAL = 'www.themealdb.com/api/json/v1/1/random.php';

const singleRecipeURL = (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
const mealByCategoryURL = (category) => `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;

export {
  ALLCATEGORIES,
  SIMPLECATEGORIES,
  RANDOMMEAL,
  singleRecipeURL,
  mealByCategoryURL,
};
