import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
} from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchMealByCategory } from '../redux/actions';

const Categories = (props) => {
  const { mealByCategory, fetchMealByCategory } = props;
  const { loading, error, byCategory } = mealByCategory;
  const { match: { params: { category: currentCategory } } } = props;
  console.log(loading, error, byCategory);

  useEffect(() => {
    fetchMealByCategory(currentCategory);
  }, []);

  return (
    <Box paddingTop="64px">
      <Skeleton
        isLoaded={!loading}
        height="calc(100vh - 64px)"
        margin={{ base: '0', lg: '0 auto' }}
        display={{ lg: 'flex' }}
        flexDirection={{ lg: 'column' }}
        minWidth="100%"
      >
        {
          byCategory[currentCategory] ? byCategory[currentCategory].map((item) => (
            <Box key={item.idMeal}>{item.strMeal}</Box>
          )) : ''
        }
      </Skeleton>
    </Box>
  );
};

Categories.propTypes = {
  mealByCategory: PropTypes.objectOf(PropTypes.any).isRequired,
  match: PropTypes.objectOf(PropTypes.any).isRequired,
  fetchMealByCategory: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  mealByCategory: state.mealByCategory,
});

const mapDispatch = {
  fetchMealByCategory,
};

export default connect(mapStateToProps, mapDispatch)(Categories);
