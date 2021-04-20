import axios from 'axios';
import { ALLCATEGORIES, mealByCategoryURL } from '../../api/apidata';
import normalizeDataByMeal from './normalizers';

const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CHANGE_FILTER = 'CHANGE_FILTER';
const CREATE_MEAL_CATEGORY = 'CREATE_MEAL_CATEGORY';
const MEAL_CATEGORY_LOADING = 'MEAL_CATEGORY_LOADING';
const MEAL_CATEGORY_QUERY_ERROR = 'MEAL_CATEGORY_QUERY_ERROR';
const MEAL_CATEGORY_LOADING_FALSE = 'MEAL_CATEGORY_LOADING_FALSE';

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
      dispatch(mealCategoryLoadingFalse());
    }
    dispatch(mealCategoryLoadingFalse());
  }
  dispatch(mealCategoryLoadingFalse());
};

export {
  CREATE_CATEGORIES,
  CHANGE_FILTER,
  CREATE_MEAL_CATEGORY,
  MEAL_CATEGORY_LOADING,
  MEAL_CATEGORY_LOADING_FALSE,
  MEAL_CATEGORY_QUERY_ERROR,
  createCategories,
  changeFilter,
  fetchCategories,
  fetchMealByCategory,
  mealCategoryLoading,
  mealCategoryLoadingFalse,
  mealCategoryQueryError,
};
