import { ALLMEALCATEGORIES } from '../../api/apidata';

const CREATE_CATEGORIES = 'CREATE_CATEGORIES';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createCategories = (newFilter) => ({
  type: CREATE_CATEGORIES,
  payload: newFilter,
});

const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  payload: newFilter,
});

const fetchCategories = () => async (dispatch) => {
  const categories = await fetch(ALLMEALCATEGORIES).then((res) => res.json());
  dispatch(createCategories(categories.categories));
};

export {
  CREATE_CATEGORIES,
  CHANGE_FILTER,
  createCategories,
  changeFilter,
  fetchCategories,
};
