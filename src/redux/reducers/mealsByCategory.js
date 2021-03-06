import {
  CREATE_MEAL_CATEGORY,
  MEAL_CATEGORY_LOADING,
  MEAL_CATEGORY_QUERY_ERROR,
  MEAL_CATEGORY_LOADING_FALSE,
} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
  byCategory: {},
};

const mealByCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MEAL_CATEGORY:
      return {
        loading: false,
        error: null,
        byCategory: {
          ...state.byCategory,
          ...action.payload,
        },
      };
    case MEAL_CATEGORY_LOADING:
      return {
        loading: true,
        error: null,
        byCategory: {
          ...state.byCategory,
        },
      };
    case MEAL_CATEGORY_LOADING_FALSE:
      return {
        loading: false,
        error: null,
        byCategory: {
          ...state.byCategory,
        },
      };
    case MEAL_CATEGORY_QUERY_ERROR:
      return {
        loading: false,
        error: action.payload,
        byCategory: {
          ...state.byCategory,
        },
      };

    default:
      return state;
  }
};

export default mealByCategoriesReducer;
