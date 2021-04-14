const ALLMEALCATEGORIES = 'www.themealdb.com/api/json/v1/1/categories.php';
const SIMPLECATEGORIES = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
const RANDOMMEAL = 'www.themealdb.com/api/json/v1/1/random.php';

const singleMeal = (id) => `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;

export {
  ALLMEALCATEGORIES,
  SIMPLECATEGORIES,
  RANDOMMEAL,
  singleMeal,
};
