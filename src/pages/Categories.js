import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
  Heading,
} from '@chakra-ui/react';
import { connect } from 'react-redux';
import { fetchMealByCategory } from '../redux/actions';
import MealSwiper from '../components/MealSwiper';

const Categories = (props) => {
  const { mealByCategory, fetchMealByCategory } = props;
  const { loading, error, byCategory } = mealByCategory;
  const { match: { params: { category: currentCategoryURL } } } = props;

  useEffect(() => {
    fetchMealByCategory(currentCategoryURL);
  }, []);

  if (error) {
    return `Error: ${error} `;
  }

  return (
    <Box
      // bgGradient={{ lg: 'linear(0deg, rgba(213,213,213,1) 0%, rgba(246,246,246,1) 100%);' }}
      background="linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)"
    >
      <Skeleton
        isLoaded={!loading}
        height={{ base: 'calc(100vh - 88px)', lg: 'calc(100vh - 144px)' }}
        margin={{ base: '0' }}
        px={{ base: 3, lg: 6 }}
        py={{ base: 3, lg: 6 }}
        display={{ base: 'flex' }}
        justifyContent={{ base: 'center' }}
        alignItems={{ base: 'center' }}
        position={{ lg: 'relative' }}
        startColor="rgba(1,1,1,1)"
        endColor="rgba(205,205,205,1)"
      >
        <Box
          w={{ base: '100%', md: '60%', lg: '35%' }}
        >
          {
            byCategory[currentCategoryURL] ? <MealSwiper props={props} /> : ''
          }
        </Box>
        <Box
          display={{ base: 'none', lg: 'block' }}
          position="absolute"
          top="20px"
          left="0"
          bgGradient="linear(to-r, yellow.600, red.500)"
          borderRightRadius="50px"
          opacity="85%"
          boxShadow="dark-lg"
        >
          <Heading size="lg" fontFamily="'Advent Pro', sans-serif;" color="rgb(242,242,242)" px="20px" _disabled>
            {`Meal Category: ${currentCategoryURL}`}
          </Heading>
        </Box>
        {/* <Box
          display={{ base: 'none', lg: 'block' }}
          position="absolute"
          top="80px"
          left="0"
          bgGradient="linear(to-r, yellow.600, red.500)"
          borderRightRadius="50px"
          opacity="85%"
          boxShadow="dark-lg"
        >
          <Heading
            size="md"
            fontFamily="'Advent Pro', sans-serif;"
            color="rgb(242,242,242)"
            px="20px"
            _disabled
          >
            {`Fav Filter: ${'Active'}`}
          </Heading>
        </Box> */}
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
