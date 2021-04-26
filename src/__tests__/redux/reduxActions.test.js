import * as actions from '../../redux/actions';
import * as types from '../../redux/actions/types';

describe('Category actions', () => {
  it('should create an action to create categories', () => {
    const obj = { categories: [{ idCategory: 1, strCategory: 'Beef' }] };
    const expectedAction = {
      type: types.CREATE_CATEGORIES,
      payload: obj,
    };
    expect(actions.createCategories(obj)).toEqual(expectedAction);
  });
  it('should create an action to create categories error', () => {
    const err = 'error';
    const expectedAction = {
      type: types.CATEGORIES_QUERY_ERROR,
      payload: err,
    };
    expect(actions.categoriesQueryError(err)).toEqual(expectedAction);
  });
  it('should create an action to set categories to load: true', () => {
    const expectedAction = {
      type: types.CATEGORIES_LOADING,
    };
    expect(actions.categoriesLoading()).toEqual(expectedAction);
  });
  it('should create an action to set categories to load: false', () => {
    const expectedAction = {
      type: types.CATEGORIES_LOADING_FALSE,
    };
    expect(actions.categoriesLoadingFalse()).toEqual(expectedAction);
  });
});

describe('MealCategory actions', () => {
  it('should create an action to create Meal Categories', () => {
    const obj = { categories: [{ idCategory: 1, strCategory: 'Beef' }] };
    const expectedAction = {
      type: types.CREATE_MEAL_CATEGORY,
      payload: obj,
    };
    expect(actions.createMealCategory(obj)).toEqual(expectedAction);
  });
  it('should create an action to create Meal categories error', () => {
    const err = 'error';
    const expectedAction = {
      type: types.MEAL_CATEGORY_QUERY_ERROR,
      payload: err,
    };
    expect(actions.mealCategoryQueryError(err)).toEqual(expectedAction);
  });
  it('should create an action to set Meal categories to load: true', () => {
    const expectedAction = {
      type: types.MEAL_CATEGORY_LOADING,
    };
    expect(actions.mealCategoryLoading()).toEqual(expectedAction);
  });
  it('should create an action to set Mealcategories to load: false', () => {
    const expectedAction = {
      type: types.MEAL_CATEGORY_LOADING_FALSE,
    };
    expect(actions.mealCategoryLoadingFalse()).toEqual(expectedAction);
  });
});

describe('Recipes actions', () => {
  it('should create an action to create Recipes', () => {
    const obj = { categories: [{ idCategory: 1, strCategory: 'Beef' }] };
    const expectedAction = {
      type: types.CREATE_RECIPE,
      payload: obj,
    };
    expect(actions.createRecipe(obj)).toEqual(expectedAction);
  });
  it('should create an action to create Recipes error', () => {
    const err = 'error';
    const expectedAction = {
      type: types.RECIPE_QUERY_ERROR,
      payload: err,
    };
    expect(actions.recipeQueryError(err)).toEqual(expectedAction);
  });
  it('should create an action to set Recipes to load: true', () => {
    const expectedAction = {
      type: types.RECIPE_LOADING_TRUE,
    };
    expect(actions.recipeLoadingTrue()).toEqual(expectedAction);
  });
  it('should create an action to set Recipes to load: false', () => {
    const expectedAction = {
      type: types.RECIPE_LOADING_FALSE,
    };
    expect(actions.recipeLoadingFalse()).toEqual(expectedAction);
  });
  it('should create an action to set Recipes Card to mobileCards.recipe: true', () => {
    const expectedAction = {
      type: types.CARD_SHOW_RECIPE,
    };
    expect(actions.showRecipeCard()).toEqual(expectedAction);
  });
  it('should create an action to set Recipes Card to mobileCards.IngredientCard: true', () => {
    const expectedAction = {
      type: types.CARD_SHOW_INGREDIENTS,
    };
    expect(actions.showIngredientCard()).toEqual(expectedAction);
  });
  it('should create an action to set Recipes Card to mobileCards.tools: true', () => {
    const expectedAction = {
      type: types.CARD_SHOW_TOOLS,
    };
    expect(actions.showToolsCard()).toEqual(expectedAction);
  });
  it('should create an action to toggle Recipe Step isDone field', () => {
    const recipeStepToChange = { id: 1, isDone: true, str: 'someStep' };
    const expectedAction = {
      type: types.TOGGLE_RECIPE_STEP,
      payload: recipeStepToChange,
    };
    expect(actions.changeRecipeStepState(recipeStepToChange)).toEqual(expectedAction);
  });
  it('should create an action to toggle Recipe Ingredient isDone field', () => {
    const recipeStepToChange = { id: 2, isDone: true, str: 'someIngredient' };
    const expectedAction = {
      type: types.TOGGLE_RECIPE_INGREDIENT,
      payload: recipeStepToChange,
    };
    expect(actions.changeRecipeIngredientState(recipeStepToChange)).toEqual(expectedAction);
  });
});
