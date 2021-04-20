import axios from 'axios';
import { ALLCATEGORIES, mealByCategoryURL, singleRecipeURL } from '../../api/apidata';
import { normalizeDataByMeal, normalizeDataRecipe } from './normalizers';

const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CREATE_MEAL_CATEGORY = 'CREATE_MEAL_CATEGORY';
const MEAL_CATEGORY_LOADING = 'MEAL_CATEGORY_LOADING';
const MEAL_CATEGORY_QUERY_ERROR = 'MEAL_CATEGORY_QUERY_ERROR';
const MEAL_CATEGORY_LOADING_FALSE = 'MEAL_CATEGORY_LOADING_FALSE';
const CREATE_RECIPE = 'CREATE_RECIPE';
const RECIPE_LOADING_TRUE = 'RECIPE_LOADING_TRUE';
const RECIPE_LOADING_FALSE = 'RECIPE_LOADING_FALSE';
const RECIPE_QUERY_ERROR = 'RECIPE_QUERY_ERROR';

const createCategories = (newFilter) => ({
  type: CREATE_CATEGORIES,
  payload: newFilter,
});

const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  payload: newFilter,
});

const createMealCategory = (mealCategory) => ({
  type: CREATE_MEAL_CATEGORY,
  payload: mealCategory,
});

const mealCategoryLoading = (mealCategory) => ({
  type: MEAL_CATEGORY_LOADING,
  payload: mealCategory,
});

const mealCategoryLoadingFalse = (mealCategory) => ({
  type: MEAL_CATEGORY_LOADING_FALSE,
  payload: mealCategory,
});

const mealCategoryQueryError = (errorDescription) => ({
  type: MEAL_CATEGORY_QUERY_ERROR,
  payload: errorDescription,
});

const createRecipe = (recipe) => ({
  type: CREATE_RECIPE,
  payload: recipe,
});

const recipeLoadingTrue = (recipe) => ({
  type: RECIPE_LOADING_TRUE,
  payload: recipe,
});

const recipeLoadingFalse = (recipe) => ({
  type: RECIPE_LOADING_FALSE,
  payload: recipe,
});

const recipeQueryError = (errorDescription) => ({
  type: RECIPE_QUERY_ERROR,
  payload: errorDescription,
});

const fetchCategories = () => async (dispatch, getState) => {
  const { allCategories } = getState();
  if (allCategories === undefined) {
    const categories = await axios.get(ALLCATEGORIES).then((res) => res.data);
    dispatch(createCategories(categories.categories));
  }
};

const fetchMealByCategory = (urlParamCategory) => async (dispatch, getState) => {
  const { mealByCategory: { byCategory: categories } } = getState();
  if (!Object.keys(categories).includes(urlParamCategory)) {
    dispatch(mealCategoryLoading);
    const apidata = await axios.get(mealByCategoryURL(urlParamCategory)).then((res) => res.data);
    if (apidata.meals === null) {
      dispatch(mealCategoryQueryError(urlParamCategory));
    } else {
      dispatch(createMealCategory(normalizeDataByMeal(apidata, urlParamCategory)));
      // dispatch(mealCategoryLoadingFalse());
    }
    // dispatch(mealCategoryLoadingFalse());
  }
  dispatch(mealCategoryLoadingFalse());
};

const fetchRecipeById = (urlParamId) => async (dispatch, getState) => {
  const { recipes } = getState();
  if (!Object.keys(recipes).includes(urlParamId)) {
    dispatch(recipeLoadingTrue);
    const apidata = await axios.get(singleRecipeURL(urlParamId)).then((res) => res.data);
    if (apidata.meals === null) {
      dispatch(mealCategoryQueryError(urlParamId));
    } else {
      dispatch(createRecipe(normalizeDataRecipe(apidata, urlParamId)));
    }
  }
  dispatch(recipeLoadingFalse);
};

export {
  CREATE_CATEGORIES,
  CHANGE_FILTER,
  CREATE_MEAL_CATEGORY,
  MEAL_CATEGORY_LOADING,
  MEAL_CATEGORY_LOADING_FALSE,
  MEAL_CATEGORY_QUERY_ERROR,
  CREATE_RECIPE,
  RECIPE_LOADING_TRUE,
  RECIPE_LOADING_FALSE,
  RECIPE_QUERY_ERROR,
  createCategories,
  changeFilter,
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
};
