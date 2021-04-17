import { combineReducers } from 'redux';
import mealCategoriesReducer from './Categories';
import mealByCategoriesReducer from './mealsByCategory';

const rootStore = combineReducers({
  categories: mealCategoriesReducer,
  mealByCategory: mealByCategoriesReducer,
});

export default rootStore;
