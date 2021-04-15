import { combineReducers } from 'redux';
import mealCategoriesReducer from './filterCategories';

const rootStore = combineReducers({
  categories: mealCategoriesReducer,
});

export default rootStore;
