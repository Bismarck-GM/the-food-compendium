import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Skeleton,
  Heading,
} from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMealByCategory,
  mealCategoryLoading,
  mealCategoryLoadingFalse,
} from '../redux/actions';
import MealSwiper from '../components/MealSwiper';

const Categories = (props) => {
  const dispatch = useDispatch();
  const mealByCategory = useSelector((state) => state.mealByCategory);
  const { loading, error, byCategory } = mealByCategory;
  const { match: { params: { category: currentCategoryURL } } } = props;

  useEffect(() => {
    if (!Object.keys(byCategory).includes(currentCategoryURL)) {
      dispatch(fetchMealByCategory(currentCategoryURL));
    } else {
      dispatch(mealCategoryLoadingFalse());
    }
    return () => {
      dispatch(mealCategoryLoading());
    };
  }, []);

  if (error) {
    return `Error: ${error} `;
  }

  return (
    <Box
      background="linear-gradient(0deg, rgba(1,1,1,1) 0%, rgba(117,117,117,1) 100%)"
    >
      <Skeleton
        overflow="hidden"
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
          h={{ base: '100%' }}
        >
          {
            byCategory[currentCategoryURL] ? <MealSwiper arrayOfMeals={byCategory[currentCategoryURL]} /> : ''
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
      </Skeleton>
    </Box>
  );
};

Categories.propTypes = {
  match: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Categories;
