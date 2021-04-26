import {
  CREATE_RECIPE,
  RECIPE_LOADING_TRUE,
  RECIPE_LOADING_FALSE,
  RECIPE_QUERY_ERROR,
  CARD_SHOW_RECIPE,
  CARD_SHOW_INGREDIENTS,
  CARD_SHOW_TOOLS,
  TOGGLE_RECIPE_STEP,
  TOGGLE_RECIPE_INGREDIENT,
} from '../actions/types';

const initialState = {
  loading: false,
  error: null,
  mobileCards: {
    recipe: true,
    ingredients: false,
    tools: false,
  },
  byId: {},
};

const recipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_RECIPE:
      return {
        loading: false,
        error: null,
        mobileCards: {
          ...state.mobileCards,
        },
        byId: {
          ...state.byId,
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
        byId: {
          ...state.byId,
        },
      };
    case RECIPE_LOADING_FALSE:
      return {
        loading: false,
        error: null,
        mobileCards: {
          ...state.mobileCards,
        },
        byId: {
          ...state.byId,
        },
      };
    case RECIPE_QUERY_ERROR:
      return {
        loading: false,
        error: `${action.payload} is not a valid URL`,
        mobileCards: {
          ...state.mobileCards,
        },
        byId: {
          ...state.byId,
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
        byId: {
          ...state.byId,
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
        byId: {
          ...state.byId,
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
        byId: {
          ...state.byId,
        },
      };
    case TOGGLE_RECIPE_STEP:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload,
        },
      };
    case TOGGLE_RECIPE_INGREDIENT:
      return {
        ...state,
        byId: {
          ...state.byId,
          ...action.payload,
        },
      };

    default:
      return state;
  }
};

export default recipeReducer;
