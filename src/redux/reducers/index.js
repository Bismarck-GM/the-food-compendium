import { combineReducers } from 'redux';
import mealCategoriesReducer from './Categories';
import mealByCategoriesReducer from './mealsByCategory';
import recipeReducer from './Recipe';

const rootStore = combineReducers({
  categories: mealCategoriesReducer,
  mealByCategory: mealByCategoriesReducer,
  recipes: recipeReducer,
});

export default rootStore;
