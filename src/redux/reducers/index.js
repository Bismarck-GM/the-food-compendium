import { combineReducers } from 'redux';
import mealCategoriesReducer from './filterCategories';
// import booksFilter from './filter';

const rootStore = combineReducers({
  categories: mealCategoriesReducer,
  // filter: booksFilter,
});

export default rootStore;
