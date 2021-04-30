import {
  CREATE_INGREDIENTS,
  INGREDIENTS_LOADING_FALSE,
  INGREDIENTS_LOADING_TRUE,
  INGREDIENTS_QUERY_ERROR,
  INGREDIENTS_CHANGE_FILTER,
} from '../actions/types';

const initialState = {
  loading: true,
  error: null,
  filter: ['All'],
  ingredients: null,
};

const ingredientsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_INGREDIENTS:
      return {
        ...state,
        loading: false,
        ingredients: action.payload,
      };
    case INGREDIENTS_LOADING_TRUE:
      return {
        ...state,
        loading: true,
      };
    case INGREDIENTS_LOADING_FALSE:
      return {
        ...state,
        loading: false,
      };
    case INGREDIENTS_QUERY_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case INGREDIENTS_CHANGE_FILTER:
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default ingredientsReducer;
