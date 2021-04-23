import {
  CREATE_CATEGORIES,
  CATEGORIES_LOADING,
  CATEGORIES_LOADING_FALSE,
  CATEGORIES_QUERY_ERROR,
} from '../actions/index';

const initialState = {
  loading: true,
  error: null,
  allCategories: null,
};

const mealCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORIES:
      return {
        loading: false,
        error: null,
        allCategories: action.payload,
      };
    case CATEGORIES_LOADING:
      return {
        loading: true,
        error: null,
        allCategories: [
          ...state.allCategories,
        ],
      };
    case CATEGORIES_LOADING_FALSE:
      return {
        loading: false,
        error: null,
        allCategories: [
          ...state.allCategories,
        ],
      };
    case CATEGORIES_QUERY_ERROR:
      return {
        loading: false,
        error: action.payload,
        allCategories: [
          ...state.allCategories,
        ],
      };
    default:
      return state;
  }
};

export default mealCategoriesReducer;
