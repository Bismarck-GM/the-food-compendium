import { CREATE_CATEGORIES, CHANGE_FILTER } from '../actions/index';

const initialState = {
  loading: true,
  currentFilter: 'All',
  allFilters: [],
  error: null,
};

const mealCategoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_CATEGORIES:
      return {
        loading: false,
        currentFilter: 'All',
        allCategories: action.payload,
        error: null,
      };
    case CHANGE_FILTER:
      return {
        ...state,
        currentFilter: action.payload,
      };
    default:
      return state;
  }
};

export default mealCategoriesReducer;
