import { useEffect } from 'react';
import PropTypes from 'prop-types';
// import {
//   Box,
//   Skeleton,
//   Heading,
// } from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchRecipeById } from '../redux/actions';
// import MealSwiper from '../components/MealSwiper';

const Recipes = (props) => {
  const { fetchRecipeById, recipes } = props;
  const { loading, error, allRecipes } = recipes;
  const { match: { params: { id: currentMealId } } } = props;

  useEffect(() => {
    fetchRecipeById(currentMealId);
  }, []);
  console.log(allRecipes);
  return `${allRecipes}${error}${loading}`;
};

Recipes.propTypes = {
  recipes: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchRecipeById: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  recipes: state.recipes,
});

const mapDispatch = {
  fetchRecipeById,
};

export default connect(mapStateToProps, mapDispatch)(Recipes);
