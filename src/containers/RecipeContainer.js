import React from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Fade,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react';
import Ingredients from '../components/recipe/Ingredients';
import Steps from '../components/recipe/Steps';
import Header from '../components/recipe/Header';
import SubHeader from '../components/recipe/SubHeader';

const RecipeContainer = ({
  currentRecipe,
  mobileCards,
}) => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });
  if (isDesktop) {
    return (
      <Box
        px={{ xl: '10%' }}
      >
        <Header mealTitle={currentRecipe.strMeal} />
        <SubHeader area={currentRecipe.strArea} />
        <Grid
          templateColumns="60% 40%"
          gap={{ md: 6, lg: 10 }}
          position="relative"
        >
          <Steps
            currentRecipe={currentRecipe}
            isDesktop={isDesktop}
          />
          <Ingredients
            currentRecipe={currentRecipe}
          />
        </Grid>
      </Box>
    );
  }

  if (mobileCards.recipe) {
    return (
      <Fade in={mobileCards.recipe} unmountOnExit>
        <Box
          h="100%"
        >
          <Steps
            currentRecipe={currentRecipe}
            isDesktop={isDesktop}
          />
        </Box>
      </Fade>
    );
  }

  if (mobileCards.ingredients) {
    return (
      <Fade in={!!mobileCards.ingredients}>
        <Ingredients
          currentRecipe={currentRecipe}
        />
      </Fade>
    );
  }

  if (mobileCards.tools) {
    return 'Tools';
  }

  return 'Something went terribly wrong. :\'(';
};

RecipeContainer.propTypes = {
  currentRecipe: PropTypes.objectOf(PropTypes.any).isRequired,
  mobileCards: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default RecipeContainer;
