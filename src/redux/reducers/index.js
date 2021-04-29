import { combineReducers } from 'redux';
import mealCategoriesReducer from './Categories';
import mealByCategoriesReducer from './mealsByCategory';
import recipeReducer from './Recipe';
import ingredientsReducer from './Ingredients';

const rootStore = combineReducers({
  categories: mealCategoriesReducer,
  mealByCategory: mealByCategoriesReducer,
  recipes: recipeReducer,
  ingredients: ingredientsReducer,
});

export default rootStore;
