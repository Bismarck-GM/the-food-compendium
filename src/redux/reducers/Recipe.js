import {
  CREATE_RECIPE,
  RECIPE_LOADING_TRUE,
  RECIPE_LOADING_FALSE,
  RECIPE_QUERY_ERROR,
  CARD_SHOW_RECIPE,
  CARD_SHOW_INGREDIENTS,
  CARD_SHOW_TOOLS,
} from '../actions/index';

const initialState = {
  loading: false,
  error: null,
  mobileCards: {
    recipe: true,
    ingredients: false,
    tools: false,
  },
  allRecipes: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        loading: state.loading,
        error: null,
        mobileCards: {
          ...state.mobileCards,
        },
        allRecipes: {
          ...state.allRecipes,
          ...action.payload,
        },
      };
    case RECIPE_LOADING_TRUE:
      return {
        loading: true,
        error: null,
        mobileCards: {
          ...state.mobileCards,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };
    case RECIPE_LOADING_FALSE:
      return {
        loading: false,
        error: null,
        mobileCards: {
          ...state.mobileCards,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };
    case RECIPE_QUERY_ERROR:
      return {
        loading: false,
        error: `${action.payload} is not a valid URL`,
        mobileCards: {
          ...state.mobileCards,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };
    case CARD_SHOW_RECIPE:
      return {
        loading: false,
        error: null,
        mobileCards: {
          recipe: true,
          ingredients: false,
          tools: false,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };
    case CARD_SHOW_INGREDIENTS:
      return {
        loading: false,
        error: null,
        mobileCards: {
          recipe: false,
          ingredients: true,
          tools: false,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };
    case CARD_SHOW_TOOLS:
      return {
        loading: false,
        error: null,
        mobileCards: {
          recipe: false,
          ingredients: false,
          tools: true,
        },
        allRecipes: {
          ...state.allRecipes,
        },
      };

    default:
      return state;
  }
};

export default recipeReducer;
