import { CREATE_CATEGORIES } from '../actions/index';

const initialState = {
  loading: true,
  allCategories: null,
  error: null,
};

const mealCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORIES:
      return {
        loading: false,
        allCategories: action.payload,
        error: null,
      };
    default:
      return state;
  }
};

export default mealCategoriesReducer;
