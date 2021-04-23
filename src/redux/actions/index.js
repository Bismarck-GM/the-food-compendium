import axios from 'axios';
import { ALLCATEGORIES, mealByCategoryURL, singleRecipeURL } from '../../api/apidata';
import { normalizeDataByMeal, normalizeDataRecipe } from './normalizers';

const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CATEGORIES_LOADING = 'CATEGORIES_LOADING';
const CATEGORIES_LOADING_FALSE = 'CATEGORIES_LOADING_FALSE';
const CATEGORIES_QUERY_ERROR = 'CATEGORIES_QUERY_ERROR';

const CREATE_MEAL_CATEGORY = 'CREATE_MEAL_CATEGORY';
const MEAL_CATEGORY_LOADING = 'MEAL_CATEGORY_LOADING';
const MEAL_CATEGORY_QUERY_ERROR = 'MEAL_CATEGORY_QUERY_ERROR';
const MEAL_CATEGORY_LOADING_FALSE = 'MEAL_CATEGORY_LOADING_FALSE';

const CREATE_RECIPE = 'CREATE_RECIPE';
const RECIPE_LOADING_TRUE = 'RECIPE_LOADING_TRUE';
const RECIPE_LOADING_FALSE = 'RECIPE_LOADING_FALSE';
const RECIPE_QUERY_ERROR = 'RECIPE_QUERY_ERROR';
const CARD_SHOW_RECIPE = 'CARD_SHOW_RECIPE';
const CARD_SHOW_INGREDIENTS = 'CARD_SHOW_INGREDIENTS';
const CARD_SHOW_TOOLS = 'CARD_SHOW_TOOLS';
const TOGGLE_RECIPE_STEP = 'TOGGLE_RECIPE_STEP';
const TOGGLE_RECIPE_INGREDIENT = 'TOGGLE_RECIPE_INGREDIENT';

const createCategories = (newFilter) => ({
  type: CREATE_CATEGORIES,
  payload: newFilter,
});

const categoriesLoading = () => ({
  type: CATEGORIES_LOADING,
});

const categoriesLoadingFalse = () => ({
  type: CATEGORIES_LOADING_FALSE,
});

const categoriesQueryError = (err) => ({
  type: CATEGORIES_QUERY_ERROR,
  payload: err,
});

const createMealCategory = (mealCategory) => ({
  type: CREATE_MEAL_CATEGORY,
  payload: mealCategory,
});

const mealCategoryLoading = () => ({
  type: MEAL_CATEGORY_LOADING,
});

const mealCategoryLoadingFalse = () => ({
  type: MEAL_CATEGORY_LOADING_FALSE,
});

const mealCategoryQueryError = (err) => ({
  type: MEAL_CATEGORY_QUERY_ERROR,
  payload: err,
});

const createRecipe = (recipe) => ({
  type: CREATE_RECIPE,
  payload: recipe,
});

const recipeLoadingTrue = () => ({
  type: RECIPE_LOADING_TRUE,
});

const recipeLoadingFalse = () => ({
  type: RECIPE_LOADING_FALSE,
});

const recipeQueryError = (err) => ({
  type: RECIPE_QUERY_ERROR,
  payload: err,
});

const showRecipeCard = (changeCard) => ({
  type: CARD_SHOW_RECIPE,
  payload: changeCard,
});

const showIngredientCard = (changeCard) => ({
  type: CARD_SHOW_INGREDIENTS,
  payload: changeCard,
});

const showToolsCard = (changeCard) => ({
  type: CARD_SHOW_TOOLS,
  payload: changeCard,
});

const changeRecipeStepState = (recipe) => ({
  type: TOGGLE_RECIPE_STEP,
  payload: recipe,
});

const changeRecipeIngredientState = (recipe) => ({
  type: TOGGLE_RECIPE_INGREDIENT,
  payload: recipe,
});

const toggleRecipeStep = (recipeId, step, current) => (dispatch, getState) => {
  const { recipes: { byId: { [recipeId]: meal } } } = getState();
  meal.steppedInstructions[step.instructionId - 1].isDone = !current;
  dispatch(changeRecipeStepState({ [recipeId]: meal }));
};

const toggleRecipeIngredient = (recipeId, ing, current) => (dispatch, getState) => {
  const { recipes: { byId: { [recipeId]: meal } } } = getState();
  meal.ingredients[ing.id - 1].isDone = !current;
  dispatch(changeRecipeIngredientState({ [recipeId]: meal }));
};

const fetchCategories = () => async (dispatch) => {
  try {
    const categories = await axios.get(ALLCATEGORIES).then((res) => res.data);
    dispatch(createCategories(categories.categories));
  } catch (err) {
    dispatch(categoriesQueryError(err));
  }
};

const fetchMealByCategory = (urlParamCategory) => async (dispatch) => {
  try {
    const apidata = await axios.get(mealByCategoryURL(urlParamCategory)).then((res) => res.data);
    if (apidata.meals === null) {
      throw new Error(`${urlParamCategory} is an invalid Category URL`);
    }
    dispatch(createMealCategory(normalizeDataByMeal(apidata, urlParamCategory)));
  } catch (err) {
    dispatch(mealCategoryQueryError(err));
  }
};

const fetchRecipeById = (urlParamId) => async (dispatch) => {
  try {
    const apidata = await axios.get(singleRecipeURL(urlParamId)).then((res) => res.data);
    if (apidata.meals === null) {
      throw new Error(`${urlParamId} is an invalid Recipe URL`);
    }
    dispatch(createRecipe(normalizeDataRecipe(apidata, urlParamId)));
  } catch (err) {
    recipeQueryError(err);
  }
};

export {
  CREATE_CATEGORIES,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_FALSE,
  CATEGORIES_QUERY_ERROR,
  CREATE_MEAL_CATEGORY,
  MEAL_CATEGORY_LOADING,
  MEAL_CATEGORY_LOADING_FALSE,
  MEAL_CATEGORY_QUERY_ERROR,
  CREATE_RECIPE,
  RECIPE_LOADING_TRUE,
  RECIPE_LOADING_FALSE,
  RECIPE_QUERY_ERROR,
  CARD_SHOW_RECIPE,
  CARD_SHOW_INGREDIENTS,
  CARD_SHOW_TOOLS,
  TOGGLE_RECIPE_STEP,
  TOGGLE_RECIPE_INGREDIENT,
  createCategories,
  categoriesLoading,
  categoriesLoadingFalse,
  categoriesQueryError,
  mealCategoryLoading,
  mealCategoryLoadingFalse,
  mealCategoryQueryError,
  createRecipe,
  recipeLoadingTrue,
  recipeLoadingFalse,
  recipeQueryError,
  fetchCategories,
  fetchMealByCategory,
  fetchRecipeById,
  showRecipeCard,
  showIngredientCard,
  showToolsCard,
  toggleRecipeStep,
  toggleRecipeIngredient,
};
