import axios from 'axios';
import { ALLCATEGORIES, mealByCategoryURL, singleRecipeURL } from '../../api/apidata';
import { normalizeDataByMeal, normalizeDataRecipe } from './normalizers';
import * as types from './types';

const createCategories = (categories) => ({
  type: types.CREATE_CATEGORIES,
  payload: categories,
});

const categoriesLoading = () => ({
  type: types.CATEGORIES_LOADING,
});

const categoriesLoadingFalse = () => ({
  type: types.CATEGORIES_LOADING_FALSE,
});

const categoriesQueryError = (err) => ({
  type: types.CATEGORIES_QUERY_ERROR,
  payload: err,
});

const createMealCategory = (mealCategory) => ({
  type: types.CREATE_MEAL_CATEGORY,
  payload: mealCategory,
});

const mealCategoryLoading = () => ({
  type: types.MEAL_CATEGORY_LOADING,
});

const mealCategoryLoadingFalse = () => ({
  type: types.MEAL_CATEGORY_LOADING_FALSE,
});

const mealCategoryQueryError = (err) => ({
  type: types.MEAL_CATEGORY_QUERY_ERROR,
  payload: err,
});

const createRecipe = (recipe) => ({
  type: types.CREATE_RECIPE,
  payload: recipe,
});

const recipeLoadingTrue = () => ({
  type: types.RECIPE_LOADING_TRUE,
});

const recipeLoadingFalse = () => ({
  type: types.RECIPE_LOADING_FALSE,
});

const recipeQueryError = (err) => ({
  type: types.RECIPE_QUERY_ERROR,
  payload: err,
});

const showRecipeCard = () => ({
  type: types.CARD_SHOW_RECIPE,
});

const showIngredientCard = () => ({
  type: types.CARD_SHOW_INGREDIENTS,
});

const showToolsCard = () => ({
  type: types.CARD_SHOW_TOOLS,
});

const changeRecipeStepState = (recipe) => ({
  type: types.TOGGLE_RECIPE_STEP,
  payload: recipe,
});

const changeRecipeIngredientState = (recipe) => ({
  type: types.TOGGLE_RECIPE_INGREDIENT,
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
    dispatch(categoriesQueryError(err.message));
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
    dispatch(mealCategoryQueryError(err.message));
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
    dispatch(recipeQueryError(err.message));
  }
};

export {
  createCategories,
  categoriesLoading,
  categoriesLoadingFalse,
  categoriesQueryError,
  createMealCategory,
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
  changeRecipeStepState,
  changeRecipeIngredientState,
  toggleRecipeStep,
  toggleRecipeIngredient,
};
