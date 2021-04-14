import { CREATE_FILTER, CHANGE_FILTER } from '../actions/index';

const mealCategoriesReducer = (state = ['All'], action) => {
  switch (action.type) {
    case CREATE_FILTER:
      return action.payload;

    case CHANGE_FILTER:
      return action.payload;

    default:
      return state;
  }
};

export default mealCategoriesReducer;
