import {
  CREATE_RECIPE,
  RECIPE_LOADING_TRUE,
  RECIPE_LOADING_FALSE,
  RECIPE_QUERY_ERROR,
} from '../actions/index';

const initialState = {
  loading: false,
  error: null,
  recipes: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        loading: state.loading,
        error: null,
        allRecipes: {
          ...state.allRecipes,
          ...action.payload,
        },
      };
    case RECIPE_LOADING_TRUE:
      return {
        loading: true,
        error: null,
        recipes: {
          ...state.recipes,
        },
      };
    case RECIPE_LOADING_FALSE:
      return {
        loading: false,
        error: null,
        recipes: {
          ...state.recipes,
        },
      };
    case RECIPE_QUERY_ERROR:
      return {
        loading: false,
        error: `${action.payload} is not a valid URL`,
        recipes: {
          ...state.recipes,
        },
      };

    default:
      return state;
  }
};

export default recipeReducer;
