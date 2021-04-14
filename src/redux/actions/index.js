const CREATE_FILTER = 'CREATE_FILTER';
const CHANGE_FILTER = 'CHANGE_FILTER';

const createFilter = (newFilter) => ({
  type: CREATE_FILTER,
  payload: newFilter,
});

const changeFilter = (newFilter) => ({
  type: CHANGE_FILTER,
  payload: newFilter,
});

export {
  CREATE_FILTER,
  CHANGE_FILTER,
  createFilter,
  changeFilter,
};
